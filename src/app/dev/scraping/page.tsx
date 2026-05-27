import { getMatches } from "@/helpers";
import { footballChIcalUrls } from "@/data/footballChIcalUrls";

export const revalidate = 3600;

export default async function ScrapingDebugPage() {
  const matches = await getMatches();

  // Raw iCal für Debugging
  const rawIcal = await fetch(footballChIcalUrls["frauen-1"]).then((r) =>
    r.text(),
  );

  return (
    <div
      style={{ padding: "2rem", fontFamily: "monospace", fontSize: "0.85rem" }}
    >
      <h1>iCal Debug</h1>

      <h2>Parsed Matches ({matches.length})</h2>
      <pre>{JSON.stringify(matches, null, 2)}</pre>

      <h2>Raw iCal (erste 2000 Zeichen)</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{rawIcal.substring(0, 2000)}</pre>
    </div>
  );
}
