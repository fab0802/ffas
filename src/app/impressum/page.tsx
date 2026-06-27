import PageHeader from "@/components/layout/PageHeader";
import LegalContent from "@/components/sections/LegalContent";

export const metadata = {
  title: "Impressum · FFAS",
  description: "Impressum zum Demo- und Portfolio-Projekt FFAS.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />

      <LegalContent updated="Demo-Version">
        <h2>Verantwortlich für diese Website</h2>
        <p>Fabian Gretsch</p>
        <p>
          Diese Website ist ein privates, nicht-kommerzielles Demo- und
          Portfolio-Projekt. «Frauenfussball Albis Süd» sowie die fünf
          dargestellten Vereine sind weder Betreiber noch Auftraggeber dieser
          Website und stehen in keinem Zusammenhang mit ihr. Sämtliche Inhalte
          dienen ausschliesslich der Demonstration.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden im Rahmen eines Demo-Projekts mit
          fiktiven beziehungsweise beispielhaften Angaben erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr
          übernommen.
        </p>

        <h2>Haftung für externe Links</h2>
        <p>
          Diese Website kann Verweise auf Websites Dritter enthalten. Für deren
          Inhalte ist ausschliesslich der jeweilige Anbieter verantwortlich. Zum
          Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die Marke «FFAS» sowie die Logos der fünf Vereine sind Eigentum der
          jeweiligen Rechteinhaber und werden hier ausschliesslich zu
          Demonstrationszwecken verwendet. Eine weitere Nutzung bedarf der
          Zustimmung der Rechteinhaber.
        </p>
      </LegalContent>
    </>
  );
}
