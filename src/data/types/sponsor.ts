import { SponsorTier } from "./sponsorTier";

export type Sponsor = {
  slug: string;
  name: string;
  logoSrc: string;
  websiteUrl?: string;
  tier: SponsorTier;
  description?: string;
  teamSlugs?: string[];
};
