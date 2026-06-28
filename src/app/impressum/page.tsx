import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = {
  title: "Impressum · FFAS",
  description: "Impressum zum Demo- und Portfolio-Projekt FFAS.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />

      <Reveal>
        <LegalContent updated="Demo-Version">
          <h2>Verantwortlich für diese Website</h2>
          <p>Fabian Gretsch</p>
          <p>
            «Frauenfussball Albis Süd» ist eine reale Kooperation von fünf
            Vereinen im Säuliamt. Diese Website ist jedoch eine eigenständige,
            nicht offizielle Umsetzung im Rahmen eines privaten,
            nicht-kommerziellen Portfolio-Projekts. Sie wurde weder von der
            Kooperation noch von den beteiligten Vereinen in Auftrag gegeben
            oder betrieben. Der offizielle Auftritt findet sich unter{" "}
            <a
              href="https://ff-albissued.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              ff-albissued.ch
            </a>
            .
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website wurden im Rahmen eines Demo-Projekts zu
            Demonstrationszwecken erstellt. Für die Richtigkeit, Vollständigkeit
            und Aktualität wird keine Gewähr übernommen.
          </p>

          <h2>Haftung für externe Links</h2>
          <p>
            Diese Website kann Verweise auf Websites Dritter enthalten. Für
            deren Inhalte ist ausschliesslich der jeweilige Anbieter
            verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
            rechtswidrigen Inhalte erkennbar.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die Marke «FFAS» sowie die Logos der fünf Vereine sind Eigentum der
            jeweiligen Rechteinhaber und werden hier ausschliesslich zu
            Demonstrationszwecken verwendet. Eine weitere Nutzung bedarf der
            Zustimmung der Rechteinhaber.
          </p>
        </LegalContent>
      </Reveal>
    </>
  );
}
