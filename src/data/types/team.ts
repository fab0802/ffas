import { TrainingSlot } from "./trainingSlot";

export type Team = {
  slug: string;
  name: string;
  emphasis: string;
  ageRange: string;
  liga: string;
  description: string;
  trainings: TrainingSlot[];
};

// Trainer werden über Assignements zugewiesen
