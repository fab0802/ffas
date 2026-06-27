import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = {
  title: "Colophon · FFAS",
  description:
    "Über dieses Projekt: Technik, Gestaltung und Hintergrund des Demo-Projekts FFAS.",
};

export default function ColophonPage() {
  return (
    <>
      <PageHeader
        eyebrow="Demo-Projekt"
        title="Colophon"
        lead="Ein Portfolio-Projekt — gebaut, um zu zeigen, wie eine moderne Vereinswebsite aussehen kann."
      />

      <LegalContent note={null}>
        <h2>Was ist FFAS?</h2>
        <p>
          «Frauenfussball Albis Süd» ist eine reale Kooperation von fünf
          Vereinen im Säuliamt. Diese Website ist jedoch eine eigenständige,
          nicht offizielle Umsetzung: Sie wurde unabhängig als Portfolio-Projekt
          gebaut und ist weder der offizielle Webauftritt der Kooperation noch
          von ihr oder den beteiligten Vereinen in Auftrag gegeben. Die Inhalte
          dienen der Demonstration und erheben keinen Anspruch auf
          Vollständigkeit oder Aktualität. Der offizielle Auftritt der
          Kooperation findet sich unter{" "}
          <a
            href="https://ff-albissued.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            ff-albissued.ch
          </a>
          .
        </p>

        <h2>Technik</h2>
        <p>
          Gebaut mit Next.js (App Router) und React in TypeScript. Das Styling
          läuft ausschliesslich über CSS Modules und CSS-Custom-Properties —
          bewusst ohne Utility-Framework. Die Schriften (Fraunces, Manrope,
          JetBrains Mono) sind über next/font selbst gehostet, gehostet wird das
          Ganze auf Netlify.
        </p>
        <p>
          Spielplan- und Resultatdaten werden serverseitig aus den öffentlichen
          iCal-Feeds von football.ch gelesen und aufbereitet.
        </p>

        <h2>Gestaltung</h2>
        <p>
          Die visuelle Sprache orientiert sich an einem dunklen, redaktionellen
          Magazin-Look: ein tiefes Navy als Basis, Pink als Akzent, Cream für
          Text. Serif (Fraunces) für grosse Titel, Monospace für Eyebrows und
          Meta-Angaben.
        </p>

        <h2>Bilder</h2>
        <p>
          Aus Gründen des Persönlichkeitsschutzes werden auf den Teamseiten
          keine realen Personenfotos gezeigt, sondern grafische Platzhalter im
          Projekt-Look. Das Bildmaterial in den News-Beiträgen ist KI-generiert.
        </p>

        <h2>Rechtliches</h2>
        <p>
          Angaben zu Verantwortlichkeit und Datenbearbeitung stehen im{" "}
          <Link href="/impressum">Impressum</Link> und in der{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>

        <h2>Quellcode</h2>
        <p>[Platzhalter: Link zu Repository oder Portfolio]</p>
      </LegalContent>
    </>
  );
}
