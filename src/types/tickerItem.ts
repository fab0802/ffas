export type TickerItem =
  | {
      kind: "result";
      teamSlug: string;
      opponent: string;
      isHome: boolean;
      goalsFor: number;
      goalsAgainst: number;
    }
  | {
      kind: "upcoming";
      teamSlug: string;
      opponent: string;
      isHome: boolean;
      kickoff: string;
    }
  | {
      kind: "news";
      text: string;
    };
