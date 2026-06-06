import type { Match } from "./match";
import type { FfasEvent } from "./ffasEvent";

/**
 * Ein Eintrag in der gemischten Timeline (Match oder Event).
 * Discriminated Union via `kind` — die UI entscheidet damit, welcher Renderer
 * gewählt wird (Match-Zeile oder Event-Zeile).
 */
export type TimelineItem =
  | { kind: "match"; data: Match; date: string; time?: string }
  | { kind: "event"; data: FfasEvent; date: string; time?: string };
