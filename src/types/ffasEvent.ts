import type { FfasEventCategory } from "./ffasEventCategory";

export type FfasEvent = {
  slug: string;
  date: string;
  endDate?: string;
  time?: string;
  title: string;
  description?: string;
  locationSlug?: string;
  venueText?: string;
  category: FfasEventCategory;
  teamSlugs?: string[];
};
