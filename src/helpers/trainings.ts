import type { TrainingSlot } from "@/types/trainingSlot";
import { getLocationBySlug, getFieldBySlug } from "./locations";

export type FormattedTraining = {
  day: string;
  time: string;
  locationName: string | undefined;
  fieldName: string | undefined;
};

export function formatTrainingSlot(slot: TrainingSlot): FormattedTraining {
  return {
    day: slot.day,
    time: `${slot.startTime}–${slot.endTime}`,
    locationName: getLocationBySlug(slot.locationSlug)?.name,
    fieldName: getFieldBySlug(slot.fieldSlug)?.name,
  };
}
