import { OfferCreateNestedManyWithoutProductsInput } from "./OfferCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  fromDate?: Date | null;
  name?: string | null;
  offers?: OfferCreateNestedManyWithoutProductsInput;
  price?: number | null;
  toDate?: Date | null;
};
