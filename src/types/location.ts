import { Address } from "./address";
import { Field } from "./field";

export type Location = {
  name: string;
  address: Address;
  phone: string;
  fields: Field[];
};
