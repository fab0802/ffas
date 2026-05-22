import type { TrainerRole } from "./trainerRole";

export type TrainerAssignment = {
  personSlug: string;
  teamSlug: string;
  role: TrainerRole;
};
