import type { TickerItem } from "@/types/tickerItem";
import { tickerItems } from "@/data/tickerItems";
import { getTeamBySlug } from "@/helpers/teams";

export async function getTickerItems(): Promise<TickerItem[]> {
  return tickerItems;
}

export function formatTickerItem(item: TickerItem): string {
  switch (item.kind) {
    case "result": {
      const team = getTeamBySlug(item.teamSlug);
      const name = team?.name ?? item.teamSlug;
      return item.isHome
        ? `${name} – ${item.opponent} ${item.goalsFor}:${item.goalsAgainst}`
        : `${item.opponent} – ${name} ${item.goalsAgainst}:${item.goalsFor}`;
    }
    case "upcoming": {
      const team = getTeamBySlug(item.teamSlug);
      const name = team?.name ?? item.teamSlug;
      const date = new Date(item.kickoff).toLocaleDateString("de-CH", {
        day: "2-digit",
        month: "2-digit",
      });
      return item.isHome
        ? `${date}: ${name} – ${item.opponent}`
        : `${date}: ${item.opponent} – ${name}`;
    }
    case "news":
      return item.text;
  }
}
