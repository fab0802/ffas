import { TickerItem } from "@/types/tickerItem";
import { tickerItems } from "@/data/tickerItems";

export async function getTickerItems(): Promise<TickerItem[]> {
  return tickerItems;
}
