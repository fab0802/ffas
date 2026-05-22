import { persons } from "@/data/persons";
import type { Person } from "@/types/person";

export function getPersonBySlug(slug: string): Person | undefined {
  return persons.find((p) => p.slug === slug);
}
