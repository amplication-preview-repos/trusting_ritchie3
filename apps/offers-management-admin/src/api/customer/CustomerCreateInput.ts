import { OfferCreateNestedManyWithoutCustomersInput } from "./OfferCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  offers?: OfferCreateNestedManyWithoutCustomersInput;
  role?: string | null;
};
