import { persons } from "@/data/persons";
import { trainerAssignments } from "@/data/trainerAssignments";
import type { Person } from "@/types/person";
import type { TrainerRole } from "@/types/trainerRole";

/**
 * Liefert alle Trainer:innen eines Teams, angereichert mit ihrer Rolle
 * in genau diesem Team.
 */
export function getTrainersForTeam(
  teamSlug: string,
): Array<Person & { role: TrainerRole }> {
  return trainerAssignments
    .filter((a) => a.teamSlug === teamSlug)
    .map((a) => {
      const trainer = persons.find((t) => t.slug === a.personSlug);
      if (!trainer) return null;
      return { ...trainer, role: a.role };
    })
    .filter((t): t is Person & { role: TrainerRole } => t !== null);
}
