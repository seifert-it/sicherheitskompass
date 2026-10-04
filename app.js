(() => {
  const topics = window.COMPASS_TOPICS;
  const questions = topics.flatMap((topic, topicIndex) =>
    topic.items.map(([title, help, action, urgency]) => ({
      topicIndex,
      title,
      help,
      action,
      urgency
    }))
  );
  const answers = Array(questions.length).fill(null);
  const options = [
    ["yes", "Ja", "Zuverlässig umgesetzt"],
    ["partial", "Teilweise", "Es gibt noch Lücken oder Ausnahmen"],
    ["no", "Nein", "Bisher nicht umgesetzt"],
    ["unknown", "Unklar", "Das müssen wir prüfen"],
    ["na", "Nicht zutreffend", "Trifft auf unsere Organisation nicht zu"]
  ];
  const byId = id => document.getElementById(id);
  let current = 0;
  const statusLabels = {
    yes: "Erfüllt",
    partial: "Teilweise",
    no: "Offen",
    unknown: "Zu prüfen"
  };
  const gradeWords = ["sehr gut", "gut", "befriedigend", "ausreichend", "mangelhaft", "ungenügend"];

  byId("question-count").textContent = `✓ ${questions.length} Fragen in ${topics.length} Themen`;
  document.querySelector(".track").setAttribute("aria-valuemax", questions.length);

  function show(section) {
    for (const id of ["welcome", "checker", "results"]) {
      byId(id).hidden = id !== section;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderNav() {
    const nav = byId("topic-nav");
    nav.replaceChildren();
    topics.forEach((topic, index) => {
      const count = questions.reduce((total, question, questionIndex) =>
        total + Number(question.topicIndex === index && answers[questionIndex] !== null), 0
      );
      const button = document.createElement("button");
      button.type = "button";
      button.className = "topic-link" + (index === questions[current].topicIndex ? " active" : "");
      button.textContent = `${index + 1}. ${topic.name} (${count}/${topic.items.length})`;
      button.addEventListener("click", () => {
        current = questions.findIndex(question => question.topicIndex === index);
        render();
      });
      nav.append(button);
    });
  }

  function updateProgress() {
    const completed = answers.filter(answer => answer !== null).length;
    byId("progress-fill").style.width = `${completed / questions.length * 100}%`;
    document.querySelector(".track").setAttribute("aria-valuenow", completed);
  }

  function render() {
    const q = questions[current];
    byId("progress-text").textContent = `Frage ${current + 1} von ${questions.length}`;
    updateProgress();
    byId("question-topic").textContent = `${q.topicIndex + 1}. ${topics[q.topicIndex].name}`;
    byId("question-number").textContent = String(current + 1).padStart(2, "0");
    byId("question").textContent = q.title;
    byId("question-help").textContent = q.help;

    const container = byId("answers");
    container.replaceChildren();
    options.forEach(([value, name, sub]) => {
      const id = `answer-${value}`;
      const choice = document.createElement("label");
      choice.className = "answer" + (answers[current] === value ? " selected" : "");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.id = id;
      input.value = value;
      input.checked = answers[current] === value;
      input.addEventListener("change", () => {
        answers[current] = value;
        container.querySelectorAll(".answer").forEach(answer =>
          answer.classList.toggle("selected", answer.querySelector("input").checked)
        );
        byId("next").disabled = false;
        byId("next").textContent = answers.every(answer => answer !== null)
          ? "Auswertung ansehen →" : "Weiter →";
        updateProgress();
        renderNav();
      });
      const body = document.createElement("span");
      body.innerHTML = `<strong>${name}</strong><small>${sub}</small>`;
      choice.append(input, body);
      container.append(choice);
    });
    byId("back").disabled = current === 0;
    byId("next").disabled = answers[current] === null;
    byId("next").textContent = answers.every(answer => answer !== null)
      ? "Auswertung ansehen →" : "Weiter →";
    renderNav();
  }
  function score(indices) {
    const included = indices.filter(index => answers[index] !== "na");
    const points = included.reduce((sum, index) => {
      if (answers[index] === "yes") return sum + 1;
      if (answers[index] === "partial") return sum + 0.5;
      return sum;
    }, 0);
    const percent = included.length ? Math.round(points / included.length * 100) : null;
    return { percent, total: included.length };
  }

  function grade(percent) {
    if (percent === null) return null;
    if (percent >= 90) return 1;
    if (percent >= 75) return 2;
    if (percent >= 60) return 3;
    if (percent >= 45) return 4;
    if (percent >= 25) return 5;
    return 6;
  }

  function listItem(text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }

  function renderResults() {
    const all = questions.map((_, index) => index);
    const result = score(all);
    const note = grade(result.percent);
    byId("result-date").textContent = `Stand: ${new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(new Date())}`;
    byId("grade").textContent = note ?? "–";
    byId("grade-word").textContent = note ? gradeWords[note - 1] : "keine Bewertung";
    byId("summary-head").textContent = note
      ? `${result.percent} % der anwendbaren Maßnahmen sind umgesetzt.`
      : "Keine anwendbaren Fragen bewertet.";
    byId("summary-text").textContent = note
      ? "Die Note zeigt, wo Ihre Organisation nach eigener Einschätzung steht. Beginnen Sie mit den dringlichen offenen Punkten und prüfen Sie unklare Antworten nach."
      : "Alle Fragen wurden als nicht zutreffend markiert. Prüfen Sie Ihre Auswahl, damit eine sinnvolle Auswertung möglich wird.";
    byId("method").textContent = `${result.total} anwendbare Fragen · Ja = 1 Punkt · Teilweise = 0,5 Punkte · Nein/Unklar = 0 Punkte · Nicht zutreffend = ausgeschlossen`;

    const open = all.filter(index => ["no", "unknown", "partial"].includes(answers[index]));
    open.sort((a, b) =>
      questions[a].urgency - questions[b].urgency ||
      Number(answers[a] === "partial") - Number(answers[b] === "partial") ||
      a - b
    );
    const top = open.slice(0, 3);
    byId("priority-box").hidden = top.length === 0;
    byId("priorities").replaceChildren(...top.map(index => listItem(questions[index].action)));

    const categories = byId("category-scores");
    categories.replaceChildren();
    topics.forEach((topic, t) => {
      const topicScore = score(all.filter(index => questions[index].topicIndex === t));
      const row = document.createElement("div");
      row.className = "category-row";
      const heading = document.createElement("strong");
      heading.textContent = topic.name;
      const badge = document.createElement("span");
      badge.textContent = topicScore.percent === null
        ? "nicht bewertet"
        : `Note ${grade(topicScore.percent)} · ${topicScore.percent} %`;
      const track = document.createElement("div");
      track.className = "category-track";
      const fill = document.createElement("span");
      fill.style.width = `${topicScore.percent ?? 0}%`;
      track.append(fill);
      row.append(heading, badge, track);
      categories.append(row);
    });

    const checklist = byId("checklist");
    checklist.replaceChildren();
    topics.forEach((topic, t) => {
      const indices = all.filter(index => questions[index].topicIndex === t && answers[index] !== "na");
      if (!indices.length) return;
      indices.sort((a, b) => statusOrder(answers[a]) - statusOrder(answers[b]) || a - b);
      const group = document.createElement("section");
      group.className = "check-group";
      const title = document.createElement("h4");
      title.textContent = topic.name;
      group.append(title);
      for (const index of indices) {
        const item = document.createElement("div");
        item.className = `check-item status-${answers[index]}`;
        const box = document.createElement("span");
        box.className = "checkbox";
        box.setAttribute("aria-hidden", "true");
        box.textContent = answers[index] === "yes" ? "✓" : "";
        const body = document.createElement("div");
        const titleLine = document.createElement("div");
        titleLine.className = "item-heading";
        const strong = document.createElement("strong");
        strong.textContent = questions[index].action;
        const badge = document.createElement("span");
        badge.className = "status";
        badge.textContent = statusLabels[answers[index]];
        titleLine.append(strong, badge);
        const detail = document.createElement("p");
        detail.textContent = questions[index].title;
        const assignment = document.createElement("div");
        assignment.className = "assignment";
        assignment.textContent = "Zuständig: ____________________   Bis: ______________";
        body.append(titleLine, detail, assignment);
        item.append(box, body);
        group.append(item);
      }
      checklist.append(group);
    });

    show("results");
    byId("result-title").focus({ preventScroll: true });
  }

  function statusOrder(value) {
    return ({ no: 0, unknown: 1, partial: 2, yes: 3 })[value];
  }

  function reset() {
    answers.fill(null);
    current = 0;
    show("welcome");
  }

  byId("start").addEventListener("click", () => {
    show("checker");
    render();
  });
  byId("back").addEventListener("click", () => {
    if (current === 0) return;
    current--;
    render();
    byId("question").focus();
  });
  byId("next").addEventListener("click", () => {
    if (answers[current] === null) return;
    if (answers.every(answer => answer !== null)) {
      renderResults();
      return;
    }
    const next = questions.findIndex((_, index) => index > current && answers[index] === null);
    current = next === -1 ? answers.findIndex(answer => answer === null) : next;
    render();
    byId("question").focus();
  });
  byId("edit").addEventListener("click", () => {
    show("checker");
    render();
  });
  byId("print").addEventListener("click", () => window.print());
  byId("restart").addEventListener("click", reset);
  byId("reset-top").addEventListener("click", reset);
})();
