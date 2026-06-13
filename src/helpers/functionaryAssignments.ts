import { persons } from "@/data/persons";
import { functionaryAssignments } from "@/data/functionaryAssignments";

import type { Person } from "@/types/person";
import type { FunctionaryRole } from "@/types/functionaryRole";

/**
 * Liefert alle Funktionärinnen mit ihrer Rolle.
 */
export function getAllFunctionaries(): Array<
  Person & { role: FunctionaryRole }
> {
  return functionaryAssignments
    .map((a) => {
      const person = persons.find((p) => p.slug === a.personSlug);
      if (!person) return null;
      return { ...person, role: a.role };
    })
    .filter((p): p is Person & { role: FunctionaryRole } => p !== null);
}
