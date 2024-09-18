import { OfferUpdateManyWithoutProductsInput } from "./OfferUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  fromDate?: Date | null;
  name?: string | null;
  offers?: OfferUpdateManyWithoutProductsInput;
  price?: number | null;
  toDate?: Date | null;
};
