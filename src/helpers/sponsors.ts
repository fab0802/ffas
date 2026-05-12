import { sponsors } from "@/data/sponsors";
import type { Sponsor } from "@/data/types/sponsor";
import type { SponsorTier } from "@/data/types/sponsorTier";

export function getSponsorsByTier(tier: SponsorTier): Sponsor[] {
  return sponsors.filter((s) => s.tier === tier);
}

export function getSponsorsByTeam(teamSlug: string): Sponsor[] {
  return sponsors.filter((s) => s.teamSlugs?.includes(teamSlug));
}
