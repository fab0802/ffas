import type { Weekday } from "./weekday";

export type TrainingSlot = {
  day: Weekday;
  startTime: string; // "19:00"
  endTime: string; // "22:00"
  locationSlug: string;
  fieldSlug: string;
};
