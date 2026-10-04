// Each item: question, explanation, concrete action for the checklist, urgency (1 = highest).
window.COMPASS_TOPICS = [
  { name: "Verantwortung & Überblick", items: [
    ["Sind Verantwortung und Vertretung für IT-Sicherheit klar benannt?", "Auch bei ehrenamtlicher IT-Betreuung sollte feststehen, wer Entscheidungen trifft und wer bei Abwesenheit einspringt.", "IT-Verantwortliche und Vertretung benennen; Erreichbarkeit schriftlich festhalten.", 2],
    ["Gibt es einen aktuellen Überblick über Geräte, Konten, Dienste und wichtige Daten?", "Dazu gehören auch private Geräte mit Organisationszugang, Website, soziale Medien und externe Cloud-Dienste.", "Inventarliste für Geräte, Konten, Dienste und Datenablagen erstellen und pflegen.", 2],
    ["Ist festgelegt, welche Abläufe und Daten besonders geschützt werden müssen?", "Beispiele sind Spendenverwaltung, Personaldaten, Seelsorgekontakte, Kinder- und Jugendarbeit oder Mitgliederdaten.", "Kritische Abläufe und besonders schutzbedürftige Daten erfassen und priorisieren.", 2],
    ["Gibt es einfache, schriftliche Sicherheitsregeln für Haupt- und Ehrenamtliche?", "Die Regeln sollten etwa Konten, Passwörter, private Geräte, Datenaustausch und Vorfallmeldungen abdecken.", "Kurze und verständliche IT-Regeln verabschieden und allen Beteiligten zugänglich machen.", 3],
    ["Werden Sicherheitsmaßnahmen regelmäßig überprüft und nach Personalwechseln angepasst?", "Eine jährliche Durchsicht und zusätzliche Prüfung bei Änderungen verhindert veraltete Zugänge und Zuständigkeiten.", "Jährliche Überprüfung und Prüfung bei Rollenwechseln fest einplanen.", 3]
  ]},
  { name: "Konten & Zugänge", items: [
    ["Nutzen alle Personen eigene Konten statt gemeinsam verwendeter Zugänge?", "Gemeinsame Logins machen Rechte und Vorfälle schwer nachvollziehbar; Ausnahmen sollten eng begrenzt sein.", "Gemeinschaftskonten durch persönliche Zugänge ersetzen oder Ausnahmen dokumentieren.", 1],
    ["Ist für E-Mail, Cloud und Administrationskonten eine zusätzliche Anmeldungssicherung aktiviert?", "Mehrfaktor-Authentisierung schützt besonders wichtige Konten auch bei bekannt gewordenem Passwort.", "Mehrfaktor-Authentisierung für wichtige Konten aktivieren; mit Admin- und E-Mail-Konten beginnen.", 1],
    ["Sind Passwörter für jeden Dienst einzigartig und sicher verwaltet?", "Ein Passwortmanager erleichtert lange, einzigartige Passwörter; Passwörter sollten nicht in Listen oder Chats liegen.", "Einzigartige Passwörter und geeigneten Passwortmanager einführen.", 1],
    ["Erhalten Personen nur die Rechte, die sie für ihre Aufgabe benötigen?", "Administrative Rechte und Zugriff auf sensible Daten sollten wenigen zuständigen Personen vorbehalten sein.", "Berechtigungen prüfen und unnötige Admin- oder Datenzugriffe entfernen.", 2],
    ["Werden Zugänge bei Austritt oder Aufgabenwechsel zeitnah entzogen oder angepasst?", "Das gilt auch für Ehrenamtliche, Dienstleister, Weiterleitungen, Website- und Social-Media-Zugänge.", "Verbindliche Austritts- und Rollenwechsel-Checkliste für alle Zugänge einführen.", 1]
  ]},
  { name: "Geräte & Software", items: [
    ["Erhalten Betriebssysteme, Browser, Apps und Netzwerkgeräte zeitnah Sicherheitsupdates?", "Auch Router, Drucker, Smartphones und Website-Software benötigen Pflege.", "Update-Verantwortung und regelmäßige Kontrolle für alle Geräte und Dienste festlegen.", 1],
    ["Werden nur unterstützte Systeme und Programme genutzt?", "Software ohne Sicherheitsupdates kann bekannte Schwachstellen dauerhaft offenlassen.", "Nicht mehr unterstützte Systeme erfassen und ersetzen oder sicher außer Betrieb nehmen.", 1],
    ["Sind Rechner und Smartphones mit Bildschirmsperre und Geräteschutz gesichert?", "Geräte mit Organisationsdaten sollten bei Verlust nicht unmittelbar lesbar sein.", "Automatische Sperre und geeignete Geräteverschlüsselung aktivieren.", 2],
    ["Sind Schutzfunktionen wie Virenschutz und Firewall aktiv und werden Warnungen beachtet?", "Vorhandene Schutzfunktionen helfen nur, wenn sie eingeschaltet und aktuell sind.", "Geräteschutz prüfen und Zuständigkeit für Warnmeldungen festlegen.", 2],
    ["Gibt es klare Regeln für private Geräte und das sichere Ausscheiden alter Geräte?", "Private Geräte brauchen Mindestanforderungen; vor Entsorgung oder Weitergabe müssen Daten zuverlässig entfernt werden.", "Regeln für private Geräte und sichere Datenlöschung bei Gerätewechsel festlegen.", 3]
  ]},
  { name: "Datensicherung & Wiederherstellung", items: [
    ["Werden alle wichtigen Daten regelmäßig und automatisch gesichert?", "Prüfen Sie neben Dateien auch E-Mail, Buchhaltung, Website und Fachanwendungen. Eine Cloud-Synchronisierung allein ist nicht immer eine unabhängige Sicherung.", "Sicherungsplan für alle wichtigen Daten und Dienste erstellen und automatisieren.", 1],
    ["Gibt es mindestens eine Sicherung, die vor Veränderung oder Verschlüsselung geschützt ist?", "Eine getrennte oder besonders geschützte Kopie begrenzt Schäden durch Ransomware und Fehlbedienung.", "Getrennte oder unveränderbare Sicherungskopie einrichten.", 1],
    ["Wird die Wiederherstellung von Daten tatsächlich getestet?", "Nur ein erfolgreicher Test zeigt, ob Sicherungen vollständig und nutzbar sind.", "Regelmäßig eine beispielhafte Wiederherstellung durchführen und dokumentieren.", 1],
    ["Sind Aufbewahrungsdauer, Zugriff und Verantwortung für Sicherungen geklärt?", "Sicherungen enthalten oft sensible Daten und benötigen Schutz sowie einen klaren Löschrhythmus.", "Zugriff, Aufbewahrung und Zuständigkeit für Sicherungen schriftlich regeln.", 2],
    ["Ist bekannt, wie lange kritische Aufgaben ohne IT auskommen und wie sie weiterlaufen?", "Beispiele sind Zahlungsverkehr, Erreichbarkeit, Gottesdienstorganisation oder Betreuungsangebote.", "Für kritische Aufgaben Wiederanlauf-Reihenfolge und einfache Ersatzverfahren festlegen.", 2]
  ]},
  { name: "E-Mail, Phishing & Zahlungen", items: [
    ["Wissen Mitarbeitende, wie sie verdächtige Nachrichten und Links prüfen?", "Besonders riskant sind Dringlichkeit, unerwartete Anhänge, Login-Aufforderungen und neue Zahlungsdaten.", "Kurze Phishing-Schulung mit Beispielen aus dem Organisationsalltag durchführen.", 2],
    ["Gibt es einen bekannten Meldeweg für verdächtige Nachrichten?", "Frühes Melden hilft auch dann, wenn bereits ein Link geöffnet oder ein Passwort eingegeben wurde.", "Niedrigschwelligen Meldeweg ohne Schuldzuweisung bekannt machen.", 2],
    ["Werden Änderungen von Kontodaten oder ungewöhnliche Zahlungen über einen zweiten Weg bestätigt?", "Ein Rückruf an eine bereits bekannte Nummer schützt vor manipulierten Rechnungen und Identitätsbetrug.", "Vier-Augen-Regel und Rückruf über bekannte Kontaktdaten für Zahlungsänderungen einführen.", 1],
    ["Sind Organisations-E-Mail-Adressen und Verteiler nachvollziehbar eingerichtet und gepflegt?", "Alte Weiterleitungen, offene Verteiler und ungenutzte Postfächer können Daten offenlegen.", "Postfächer, Weiterleitungen und Verteiler prüfen und aufräumen.", 3],
    ["Sind Website-Domain und E-Mail-Versand technisch gegen Missbrauch abgesichert?", "Dazu zählen passende Einstellungen beim Mailanbieter, etwa SPF, DKIM und DMARC; die Umsetzung kann ein Dienstleister prüfen.", "Mailanbieter oder Dienstleister mit Prüfung der Domain- und E-Mail-Schutzkonfiguration beauftragen.", 3]
  ]},
  { name: "Daten & Zusammenarbeit", items: [
    ["Wissen alle, wo sensible Daten gespeichert und mit wem sie geteilt werden dürfen?", "Besondere Vorsicht gilt etwa für Daten von Kindern, Hilfesuchenden, Beschäftigten und Mitgliedern.", "Zulässige Ablagen und Freigabewege für sensible Daten festlegen.", 1],
    ["Sind Cloud-Freigaben, geteilte Ordner und öffentliche Links regelmäßig geprüft?", "Ein einmal erstellter Link kann länger bestehen bleiben als beabsichtigt.", "Freigaben und öffentliche Links prüfen; nicht benötigte Zugriffe entfernen.", 2],
    ["Werden vertrauliche Informationen über geeignete Kanäle übertragen?", "Private Messenger oder ungeschützte Anhänge sind für sensible Daten häufig ungeeignet.", "Geeignete Übertragungswege festlegen und bei Bedarf verschlüsselte Optionen bereitstellen.", 2],
    ["Sind Löschung, Aufbewahrung und Zugriff auf personenbezogene Daten geregelt?", "Daten sollten nicht unbegrenzt in Postfächern, Geräten und geteilten Ordnern liegen bleiben.", "Aufbewahrungs- und Löschregeln mit zuständiger Datenschutzstelle abstimmen.", 2],
    ["Werden Dienstleister und eingesetzte Online-Dienste vor Nutzung geprüft?", "Achten Sie auf Zuständigkeiten, Sicherheitsfunktionen, Datenverarbeitung und Ausstiegsmöglichkeiten.", "Wichtige Online-Dienste und Dienstleister anhand eines kurzen Prüfblatts erfassen.", 3]
  ]},
  { name: "Netzwerk, Website & Cloud", items: [
    ["Sind Router und WLAN mit aktuellen Einstellungen und individuellen Zugangsdaten geschützt?", "Standardpasswörter, alte Verschlüsselung oder ausstehende Updates schwächen das gesamte Netz.", "Router- und WLAN-Konfiguration einschließlich Updates und Zugangsdaten prüfen.", 2],
    ["Sind Gäste- und private Geräte vom internen Organisationsnetz getrennt?", "Ein Gastnetz begrenzt den Zugang zu Druckern, Dateien und Verwaltungsgeräten.", "Separates Gast-WLAN einrichten und interne Ressourcen abschirmen.", 3],
    ["Sind Website, Domain und Online-Dienste einer zuständigen Person zugeordnet?", "Ablaufende Domains, ungenutzte Plugins oder verlorene Adminzugänge können Dienste gefährden.", "Zuständigkeit und Zugangsdokumentation für Website, Domain und Cloud festlegen.", 2],
    ["Werden Website und Erweiterungen aktualisiert und unnötige Funktionen entfernt?", "Gerade zusätzliche Plugins und Formulare benötigen Wartung.", "Website-Updates regelmäßig prüfen und nicht benötigte Erweiterungen entfernen.", 2],
    ["Sind wichtige Cloud-Dienste gegen Ausfall und Kontoverlust vorbereitet?", "Prüfen Sie Exportmöglichkeiten, Wiederherstellung und einen sicheren zweiten Administrationszugang.", "Wiederherstellungs- und Exportweg für zentrale Cloud-Dienste dokumentieren.", 2]
  ]},
  { name: "Vorfälle & Notfälle", items: [
    ["Wissen alle, wen sie bei Geräteverlust, verdächtiger Anmeldung oder Schadsoftware sofort informieren?", "Ein klarer Erstkontakt verkürzt die Zeit bis zur Reaktion.", "Meldekontakt und Beispiele für meldepflichtige IT-Vorfälle bekannt machen.", 1],
    ["Gibt es einen kurzen Plan für die ersten Schritte bei einem IT-Vorfall?", "Er sollte etwa Kontakte, betroffene Konten, Sicherungen, Dokumentation und Entscheidungswege benennen.", "Einseitigen IT-Notfallplan mit Kontakten und ersten Schritten erstellen.", 1],
    ["Sind wichtige Kontakt- und Zugangsinformationen auch bei IT-Ausfall erreichbar?", "Wenn E-Mail und Cloud ausfallen, muss die Organisation trotzdem handlungsfähig bleiben.", "Notfallkontakte und Wiederherstellungsinformationen sicher offline verfügbar machen.", 2],
    ["Ist geklärt, wer über externe Unterstützung und notwendige Meldungen entscheidet?", "Je nach Vorfall können Dienstleister, Versicherer, Datenschutzstelle oder Behörden einzubeziehen sein.", "Entscheidungswege und externe Kontakte für Vorfälle festlegen.", 2],
    ["Wurde der Notfallplan mit einem einfachen Szenario geübt?", "Ein kurzer Probedurchlauf deckt fehlende Nummern und unrealistische Annahmen auf.", "Einmal jährlich einen einfachen IT-Notfall durchspielen und Erkenntnisse einarbeiten.", 3]
  ]},
  { name: "Räume, Papier & unterwegs", items: [
    ["Sind Räume und Schränke mit IT-Geräten oder vertraulichen Unterlagen angemessen gesichert?", "Auch Papierakten, Sicherungsmedien und Netzwerkgeräte brauchen Schutz vor unbefugtem Zugriff.", "Zugang zu IT-Räumen, Schränken und vertraulichen Akten überprüfen.", 2],
    ["Werden Ausdrucke, Notizen und Datenträger sicher aufbewahrt und entsorgt?", "Vertrauliche Listen und USB-Sticks sollten nicht offen liegen oder im normalen Papierkorb landen.", "Regeln für Aufbewahrung und sichere Entsorgung von Papier und Datenträgern festlegen.", 3],
    ["Sind Geräte und Unterlagen bei mobiler Arbeit und Veranstaltungen vor Verlust geschützt?", "Unterwegs steigen Verlust- und Einblickrisiken, etwa im Auto, Gemeindesaal oder Zug.", "Kurze Regeln für Transport, unbeaufsichtigte Geräte und mobiles Arbeiten vereinbaren.", 3],
    ["Ist Fernzugriff auf Organisationssysteme besonders geschützt und auf notwendige Personen begrenzt?", "Fernwartung und Zugriff von unterwegs benötigen klare Freigaben und sichere Anmeldeverfahren.", "Fernzugriffe erfassen, begrenzen und besonders absichern.", 2],
    ["Wird bei gemeinsam genutzten Räumen und Geräten auf Abmeldung und sichtgeschützte Arbeit geachtet?", "Das ist besonders wichtig bei offenen Büros, Begegnungsstätten und Geräten, die mehrere Gruppen nutzen.", "Abmeldung, automatische Sperre und Sichtschutz für gemeinsam genutzte Räume regeln.", 3]
  ]},
  { name: "Menschen & Ehrenamt", items: [
    ["Erhalten neue Haupt- und Ehrenamtliche eine kurze Sicherheitseinweisung?", "Wichtig sind Zugänge, Umgang mit Daten, Phishing und der Meldeweg.", "Sicherheitseinweisung in die Einarbeitung aufnehmen.", 2],
    ["Werden Sicherheitsregeln regelmäßig anhand praktischer Beispiele aufgefrischt?", "Kurze Wiederholungen sind oft wirksamer als eine einmalige lange Schulung.", "Jährliche kurze Auffrischung mit Beispielen aus dem Alltag planen.", 3],
    ["Können Beteiligte Fehler und Verdachtsfälle ohne Angst vor Vorwürfen melden?", "Eine offene Meldekultur hilft, Vorfälle früh zu erkennen und Schäden zu begrenzen.", "Meldekultur ohne Schuldzuweisung ausdrücklich vereinbaren.", 2],
    ["Gibt es bei Wechseln im Ehrenamt eine Übergabe von Aufgaben, Daten und Zugängen?", "Gerade selten genutzte Website- oder Vereinskonto-Zugänge gehen sonst leicht verloren.", "Standardisierte Übergabe für Ehrenamts- und Funktionswechsel einführen.", 2],
    ["Sind externe Helfende und Dienstleister über ihre Zugriffe und Pflichten informiert?", "Zugriffe sollten zweckgebunden und nach Abschluss wieder entzogen werden.", "Externe Zugriffe dokumentieren, begrenzen und nach Einsatzende entfernen.", 3]
  ]}
];
