import Image from "next/image";
import {
  getTeamForMatch,
  getMatchTeamCrestLabel,
  getMatchTeamDisplayName,
  getShortVenueName,
  getMatchStatusLabel,
  getClubLogoUrl,
} from "@/helpers";
import type { Match } from "@/types/match";
import { isFfasClub } from "@/data/ffasClubNames";
import styles from "./SpielplanMatchCard.module.css";

const FFAS_LOGO_URL = "/ffas-logo-letters-only.svg";

export type SpielplanMatchCardProps = {
  match: Match;
};

function getKindLabel(match: Match): string {
  switch (match.kind) {
    case "Meisterschaft":
      return "Meisterschaft";
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
          width={32}
          height={32}
          className={styles.crestImg}
          unoptimized
        />
      </div>
    );
  }
  return (
    <div
      className={`${styles.crest} ${highlight ? styles.crestHighlight : styles.crestPlain}`}
    >
      {fallbackLabel}
    </div>
  );
}

export default function SpielplanMatchCard({ match }: SpielplanMatchCardProps) {
  const team = getTeamForMatch(match);
  const teamLabel = team ? getMatchTeamCrestLabel(team) : "";
  const teamDisplayName = team ? getMatchTeamDisplayName(team) : "";
  const venue = getShortVenueName(match);
  const statusLabel = getMatchStatusLabel(match);
  const isCancelled = match.status === "Nullwertung";

  // Zeit-Anzeige: bei Turnieren mit Endzeit, sonst nur Startzeit
  const timeDisplay =
    match.kind === "Turnier" && match.time && match.endTime
      ? `${match.time} – ${match.endTime}`
      : (match.time ?? "");

  const opponent = match.opponent ?? "";
  const opponentLogoUrl = opponent ? getClubLogoUrl(opponent) : undefined;

  // Turnier-Organisator-Logo: FFAS-Logo bei Trägervereinen, sonst Vereins-Logo
  const organizerIsFfas = isFfasClub(match.organizerText);
  const organizerLogoUrl = organizerIsFfas
    ? FFAS_LOGO_URL
    : match.organizerText
      ? getClubLogoUrl(match.organizerText)
      : undefined;
  const organizerFallback = organizerIsFfas
    ? teamLabel
    : initials(match.organizerText ?? "Turnier");

  // Crest-Elemente einmalig vorbereiten (für Heim/Auswärts wiederverwendbar)
  const ffasCrest = (
    <Crest logoUrl={FFAS_LOGO_URL} fallbackLabel={teamLabel} highlight={true} />
  );
  const opponentCrest = (
    <Crest
      logoUrl={opponentLogoUrl}
      fallbackLabel={initials(opponent)}
      highlight={false}
    />
  );

  return (
    <article
      className={`${styles.card} ${isCancelled ? styles.cancelled : ""}`}
      data-orientation={
        match.kind === "Turnier" ? "tournament" : match.home ? "home" : "away"
      }
    >
      {/* Header: Zeit + Kind/Status */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.time}>{timeDisplay}</span>
          {teamDisplayName && (
            <>
              <span className={styles.headerSep}>·</span>
              <span className={styles.teamName}>{teamDisplayName}</span>
            </>
          )}
        </div>{" "}
        {statusLabel ? (
          <span className={styles.statusBadge}>{statusLabel}</span>
        ) : (
          <span className={styles.kindLabel}>{getKindLabel(match)}</span>
        )}
      </div>

      {/* Mitte: Turnier ODER Heim-/Auswärtsspiel */}
      {match.kind === "Turnier" ? (
        <div className={styles.matchup}>
          <Crest
            logoUrl={organizerLogoUrl}
            fallbackLabel={organizerFallback}
            highlight={organizerIsFfas}
          />
          <div className={styles.tournamentBlock}>
            <span className={styles.tournamentTitle}>
              {match.tournamentTitle ?? "Turnier"}
            </span>
            {match.organizerText && (
              <span className={styles.organizerText}>
                Organisator: {match.organizerText}
              </span>
            )}
          </div>
        </div>
      ) : match.home ? (
        <div className={styles.matchup}>
          {ffasCrest}
          <span className={styles.vs}>VS</span>
          {opponentCrest}
          <span className={styles.opponentName}>{opponent}</span>
        </div>
      ) : (
        <div className={styles.matchup}>
          {opponentCrest}
          <span className={styles.opponentName}>{opponent}</span>
          <span className={styles.vs}>VS</span>
          {ffasCrest}
        </div>
      )}

      {/* Footer: Spielort */}
      {venue && <div className={styles.venue}>{venue}</div>}
    </article>
  );
}
