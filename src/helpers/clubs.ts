import { clubs } from "@/data/clubs";
import type { Club } from "@/types/club";

export async function getClubs(): Promise<Club[]> {
  return clubs;
}
