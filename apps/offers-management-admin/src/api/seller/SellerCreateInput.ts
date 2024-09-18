import { OfferCreateNestedManyWithoutSellersInput } from "./OfferCreateNestedManyWithoutSellersInput";

export type SellerCreateInput = {
  offers?: OfferCreateNestedManyWithoutSellersInput;
  role?: string | null;
};
