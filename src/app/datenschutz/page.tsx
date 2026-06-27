import PageHeader from "@/components/layout/PageHeader";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = {
  title: "Datenschutz · FFAS",
  description:
    "Datenschutzerklärung zum Demo-Projekt FFAS nach revidiertem Schweizer Datenschutzgesetz (revDSG).",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutz"
        lead="Wie diese Website mit Daten umgeht — bewusst minimal gehalten."
      />

      <LegalContent updated="Demo-Version">
        <h2>1. Verantwortliche Stelle</h2>
        <p>Fabian Gretsch</p>
        <p>
          «Frauenfussball Albis Süd» ist eine reale Kooperation von fünf
          Vereinen im Säuliamt. Diese Website ist eine eigenständige, nicht
          offizielle Umsetzung im Rahmen eines privaten, nicht-kommerziellen
          Portfolio-Projekts und wurde weder von der Kooperation noch von den
          beteiligten Vereinen in Auftrag gegeben.
        </p>

        <h2>2. Grundsatz</h2>
        <p>
          Diese Website verarbeitet so wenige Personendaten wie möglich. Es gibt
          keine Kontaktformulare, keinen Login, keinen Newsletter und keine
          Kommentarfunktion.
        </p>

        <h2>3. Hosting und Server-Logs</h2>
        <p>
          Die Website wird bei Netlify gehostet. Beim Aufruf können technisch
          notwendige Daten — etwa IP-Adresse, Datum und Uhrzeit, abgerufene
          Seite und Browsertyp — in Server-Logfiles bearbeitet werden. Dies
          dient dem sicheren und stabilen Betrieb der Website.
        </p>

        <h2>4. Schriftarten</h2>
        <p>
          Die verwendeten Schriften (Fraunces, Manrope, JetBrains Mono) werden
          über next/font beim Build selbst gehostet und vom eigenen Server
          ausgeliefert. Es findet kein Abruf von Google-Servern und keine
          Übermittlung der IP-Adresse an Dritte statt.
        </p>

        <h2>5. Cookies und Analyse</h2>
        <p>
          Diese Website setzt keine Tracking- oder Marketing-Cookies und bindet
          keine Analyse- oder Werbedienste ein.
        </p>

        <h2>6. Spielplan-Daten</h2>
        <p>
          Spielplan- und Resultatdaten werden serverseitig aus öffentlichen
          iCal-Feeds von football.ch bezogen. Dabei werden keine Personendaten
          der Besucher:innen an Dritte übermittelt.
        </p>

        <h2>7. Bilder von Personen</h2>
        <p>
          Aus Gründen des Persönlichkeitsschutzes werden Fotos von Spielerinnen
          im Rahmen dieses Demo-Projekts durch grafische Platzhalter ersetzt.
          Reale Personenaufnahmen sind nicht Teil der veröffentlichten
          Demo-Version.
        </p>

        <h2>8. Ihre Rechte</h2>
        <p>
          Nach dem revidierten Schweizer Datenschutzgesetz (revDSG, in Kraft
          seit 1. September 2023) haben betroffene Personen insbesondere das
          Recht auf Auskunft, Berichtigung, Löschung sowie auf Information über
          die Bearbeitung ihrer Daten. Da es sich um ein nicht-kommerzielles
          Demo-Projekt ohne aktive Erhebung von Personendaten handelt, werden
          über die technisch notwendigen Hosting-Logs hinaus keine Daten
          bearbeitet.
        </p>

        <h2>9. Besucher:innen aus der EU und dem EWR</h2>
        <p>
          Für Personen mit Aufenthalt in der EU beziehungsweise im EWR kann
          zusätzlich die Datenschutz-Grundverordnung (DSGVO) anwendbar sein. Die
          oben beschriebenen Rechte gelten in diesem Fall sinngemäss.
        </p>
      </LegalContent>
    </>
  );
}
