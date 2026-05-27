import { footballChIcalUrls } from "@/data/footballChIcalUrls";
import { parseFootballChIcal } from "@/lib/ical/parseFootballChIcal";
import type { Match } from "@/types/match";

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};

async function fetchIcal(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: FETCH_HEADERS,
    next: { revalidate: 3600 }, // 1h ISR-Cache
  });
  if (!res.ok) {
    throw new Error(
      `iCal fetch failed: ${res.status} ${res.statusText} — ${url}`,
    );
  }
  return await res.text();
}

export async function getMatches(): Promise<Match[]> {
  const teamSlugs = Object.keys(footballChIcalUrls);

  const results = await Promise.all(
    teamSlugs.map(async (teamSlug) => {
      const url = footballChIcalUrls[teamSlug];
      try {
        const icsBody = await fetchIcal(url);
        return parseFootballChIcal(teamSlug, icsBody);
      } catch (err) {
        console.error(`iCal fetch/parse failed for ${teamSlug}:`, err);
        return [];
      }
    }),
  );

  return results.flat();
}
