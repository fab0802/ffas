import { persons } from "@/data/persons";
import { teams } from "@/data/teams";
import { trainerAssignments } from "@/data/trainerAssignments";

import type { Person } from "@/types/person";
import type { Team } from "@/types/team";
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

/**
 * Liefert alle Teams, in denen ein Trainer eingetragen ist,
 * angereichert mit der Rolle pro Team.
 */
export function getTeamsForTrainer(
  trainerSlug: string,
): Array<Team & { role: TrainerRole }> {
  return trainerAssignments
    .filter((a) => a.personSlug === trainerSlug)
    .map((a) => {
      const team = teams.find((t) => t.slug === a.teamSlug);
      if (!team) return null;
      return { ...team, role: a.role };
    })
    .filter((t): t is Team & { role: TrainerRole } => t !== null);
}
