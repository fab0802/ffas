import Image from "next/image";
import {
  getTeamForMatch,
  getDisplayLeague,
  formatDateLong,
  getMatchVenueName,
  getMatchTeamDisplayName,
  getClubLogoUrl,
} from "@/helpers";
import type { Match } from "@/types/match";
import styles from "./MatchCard.module.css";

export type MatchCardProps = { match: Match };

const FFAS_LOGO_URL = "/ffas-logo-letters-only.svg";

function getPillLabel(match: Match): string {
  switch (match.kind) {
    case "Meisterschaft":
      return "Matchday";
    case "Cup":
      return "Cup";
    case "Testspiel":
      return "Testspiel";
    case "Turnier":
      return "Turnier";
  }
}

function initials(name: string): string {
  const cleaned = name.replace(/^FC\s+|^SC\s+|^SV\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/**
 * Crest: zeigt ein Logo, falls verfügbar, sonst Buchstaben-Fallback.
 */
function Crest({
  logoUrl,
  fallbackLabel,
  highlight,
}: {
  logoUrl: string | undefined;
  fallbackLabel: string;
  highlight: boolean;
}) {
  if (logoUrl) {
    return (
      <div className={`${styles.crest} ${styles.crestLogo}`}>
        <Image
          src={logoUrl}
          alt=""
          width={84}
          height={84}
          className={styles.crestImg}
          unoptimized
        />
      </div>
    );
  }
  return (
    <div
      className={`${styles.crest} ${
        highlight ? styles.crestHighlight : styles.crestPlain
      }`}
    >
      {fallbackLabel}
    </div>
  );
}

export default function MatchCard({ match }: MatchCardProps) {
  const team = getTeamForMatch(match);
  const league = getDisplayLeague(match);
  const venueName = getMatchVenueName(match);

  const ffasName = team ? getMatchTeamDisplayName(team) : "FFAS";
  const ffasSub = "Albis Süd";

  // ─── Turnier-Branch ──────────────────────────────────────────────────
  if (match.kind === "Turnier") {
    const timeLine =
      match.time && match.endTime
        ? `${match.time}–${match.endTime}`
        : match.time;

    const dateLine = [formatDateLong(match.date), timeLine, venueName]
      .filter(Boolean)
      .join(" · ");

    return (
      <article className={styles.card} data-pill={getPillLabel(match)}>
        <div className={styles.date}>{dateLine}</div>

        <div className={styles.tournament}>
          <div className={styles.tournamentTitle}>
            {match.tournamentTitle ?? "Turnier"}
          </div>
          {match.competition && (
            <div className={styles.tournamentMeta}>{match.competition}</div>
          )}
          <div className={styles.tournamentTeam}>
            {ffasName} <span className={styles.tournamentSub}>· {ffasSub}</span>
          </div>
        </div>

        <div className={styles.info}>
          <span>
            Wettbewerb
            <strong>Turnier</strong>
          </span>
          {match.organizerText && (
            <span>
              Organisator
              <strong>{match.organizerText}</strong>
            </span>
          )}
          {venueName && (
            <span>
              Ort
              <strong>{venueName}</strong>
            </span>
          )}
        </div>
      </article>
    );
  }

  // ─── Reguläres Spiel ─────────────────────────────────────────────────
  const opponent = match.opponent ?? "TBD";

  const homeName = match.home ? ffasName : opponent;
  const homeSub = match.home ? ffasSub : "Gast";
  const awayName = match.home ? opponent : ffasName;
  const awaySub = match.home ? "Gast" : ffasSub;

  // Logo-URLs: FFAS-Seite kriegt das AS-Emblem, Gegner via Namens-Lookup
  const homeLogoUrl = match.home ? FFAS_LOGO_URL : getClubLogoUrl(opponent);
  const awayLogoUrl = match.home ? getClubLogoUrl(opponent) : FFAS_LOGO_URL;

  const dateLine = [
    formatDateLong(match.date),
    match.time,
    match.home && venueName ? venueName : undefined,
    !match.home ? "Auswärts" : undefined,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className={styles.card} data-pill={getPillLabel(match)}>
      <div className={styles.date}>{dateLine}</div>

      <div className={styles.teams}>
        <div className={`${styles.team} ${styles.home}`}>
          <Crest
            logoUrl={homeLogoUrl}
            fallbackLabel={initials(homeName)}
            highlight={match.home}
          />
          <div className={styles.name}>{homeName}</div>
          <div className={styles.sub}>{homeSub}</div>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={`${styles.team} ${styles.away}`}>
          <Crest
            logoUrl={awayLogoUrl}
            fallbackLabel={initials(awayName)}
            highlight={!match.home}
          />
          <div className={styles.name}>{awayName}</div>
          <div className={styles.sub}>{awaySub}</div>
        </div>
      </div>

      <div className={styles.info}>
        <span>
          Wettbewerb
          <strong>{match.kind}</strong>
        </span>
        {league && (
          <span>
            Liga
            <strong>{league}</strong>
          </span>
        )}
        <span>
          Ort
          <strong>{match.home ? "Heim" : "Auswärts"}</strong>
        </span>
      </div>
    </article>
  );
}
