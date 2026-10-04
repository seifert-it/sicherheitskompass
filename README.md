# Sicherheitskompass für seifert-it

Ein eigenständiges, responsives Webtool für Kirchen, Vereine und soziale Einrichtungen. Gestaltung und Farben orientieren sich an Phishing-Quiz und Photo-Check. Der Kompass ist als eigenes Motiv auf Startseite und Ergebnis eingebaut.

## Funktionen

- 50 Fragen in 10 Themenbereichen
- Antworten: Ja, Teilweise, Nein, Unklar, Nicht zutreffend
- Schulnote 1 bis 6, Themenwerte und drei priorisierte nächste Schritte
- Individuelle Checkliste mit offenen und erfüllten Punkten sowie Feldern für Zuständigkeit und Termin
- Schaltfläche „Checkliste als PDF speichern / drucken“: öffnet den Druckdialog. Dort „Als PDF sichern“ oder „Save as PDF“ wählen.
- Keine Anmeldung, Cookies, Analysewerkzeuge, externen Skripte oder dauerhafte Speicherung der Antworten

## Bewertung

Alle anwendbaren Fragen zählen gleich: Ja = 1 Punkt, Teilweise = 0,5 Punkte, Nein/Unklar = 0 Punkte. Nicht zutreffend wird ausgeschlossen. Aus dem Erfüllungsgrad folgt die Note: 1 ab 90 %, 2 ab 75 %, 3 ab 60 %, 4 ab 45 %, 5 ab 25 %, sonst 6. Dies ist eine Selbsteinschätzung, keine technische Prüfung oder Zertifizierung.

## Veröffentlichung und Einbindung

Den gesamten Ordner auf einen statischen Webhost hochladen. `index.html`, `styles.css`, `questions.js`, `app.js`, `logo_seifert-it.png` und `favicon.svg` müssen nebeneinander liegen. Die Seite lässt sich auch lokal über `index.html` öffnen.

### GitHub selbst einrichten

1. Auf GitHub ein neues Repository, zum Beispiel `Sicherheitskompass`, anlegen.
2. Die Dateien aus diesem Ordner in das Repository hochladen. Die Dateien gehören direkt ins Stammverzeichnis; `index.html` darf nicht in einem zusätzlichen Unterordner liegen.
3. Falls das Tool über GitHub Pages erreichbar sein soll: In den Repository-Einstellungen unter **Pages** die Veröffentlichung aus dem Hauptbranch und dem Stammverzeichnis aktivieren.
4. Die veröffentlichte URL im Browser öffnen und Fragebogen, Auswertung und PDF-Druck prüfen.

Für eine öffentliche Einbindung auf der Homepage muss auch das Repository beziehungsweise die veröffentlichte Pages-Seite öffentlich erreichbar sein. Die Veröffentlichung nimmt die betreibende Person selbst vor.

Nach Veröffentlichung kann die URL wie die bestehenden Tools in einen Jimdo-HTML-Block eingebunden werden:

```html
<iframe
  src="https://IHRE-VEROEFFENTLICHTE-URL/"
  title="Sicherheitskompass für Kirchen, Vereine und soziale Einrichtungen"
  loading="lazy"
  style="width:100%;height:1050px;border:0;border-radius:18px"
></iframe>
```

Je nach Bildschirmbreite und geöffnetem Ergebnis kann innerhalb des eingebetteten Tools gescrollt werden. Die PDF-Funktion druckt das Tool-Dokument. Vor der öffentlichen Einbindung sollten die Darstellung in Jimdo und der PDF-Dialog am Computer und Smartphone geprüft werden.

## Inhaltliche Grundlage

Die Themenauswahl orientiert sich an den Bereichen des [BSI IT-Grundschutzes](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html), insbesondere Organisation, Berechtigungen, Datensicherung, Anwendungen und Notfallmanagement. Die Fragen und die Benotung sind eine eigenständige, vereinfachte Orientierungshilfe von seifert-it und kein BSI-Prüfschema.
