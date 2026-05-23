import { getClubs as fetchClubs } from "@/data/clubs";
import type { Club } from "@/types/club";

export async function getClubs(): Promise<Club[]> {
  return fetchClubs();
}

export async function getClubBySlug(slug: string): Promise<Club | undefined> {
  const clubs = await fetchClubs();
  return clubs.find((c) => c.slug === slug);
}
