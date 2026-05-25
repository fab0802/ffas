import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnchorNav from "./_blocks/AnchorNav";
import ManifestBlock from "./_blocks/ManifestBlock";
import TraegervereineBlock from "./_blocks/TraegervereineBlock";
import GeschichteBlock from "./_blocks/GeschichteBlock";
import StatutenBlock from "./_blocks/StatutenBlock";
import LeitungBlock from "./_blocks/LeitungBlock";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FFAS — Über uns",
  description:
    "Über FFAS — der Zusammenschluss von fünf Säuliämtler Trägervereinen für den Frauen- und Mädchenfussball.",
};

const anchors = [
  { id: "manifest", label: "Manifest" },
  { id: "traegervereine", label: "Trägervereine" },
  { id: "leitung", label: "Leitung" },
  { id: "geschichte", label: "Geschichte" },
  { id: "statuten", label: "Statuten" },
];

export default function FfasPage() {
  return (
    <>
      <PageHeader
        eyebrow="FFAS"
        title={
          <>
            Frauenfussball <em>Albis Süd</em>
          </>
        }
        lead="FFAS bündelt den Frauen- und Mädchenfussball von fünf Säuliämtler Vereinen — als gemeinsame Plattform, ohne eigenständige Vereinsstruktur."
      />

      <AnchorNav anchors={anchors} />

      <div className={styles.page}>
        <ManifestBlock />
        <TraegervereineBlock />
        <LeitungBlock />
        <GeschichteBlock />
        <StatutenBlock />
      </div>
    </>
  );
}
