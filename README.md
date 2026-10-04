# Sicherheitskompass für seifert-it

Ein eigenständiges, responsives Webtool für Kirchen, Vereine und soziale Einrichtungen. 

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


## Inhaltliche Grundlage

Die Themenauswahl orientiert sich an den Bereichen des [BSI IT-Grundschutzes](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html), insbesondere Organisation, Berechtigungen, Datensicherung, Anwendungen und Notfallmanagement. Die Fragen und die Benotung sind eine eigenständige, vereinfachte Orientierungshilfe von seifert-it und kein BSI-Prüfschema.
