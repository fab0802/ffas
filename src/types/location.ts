import type { Address } from "./address";
import type { Field } from "./field";

export type Location = {
  slug: string;
  name: string;
  address: Address;
  phone?: string;
  fields: Field[];
};
