import { OfferUpdateManyWithoutCustomersInput } from "./OfferUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  offers?: OfferUpdateManyWithoutCustomersInput;
  role?: string | null;
};
