import { OfferUpdateManyWithoutSellersInput } from "./OfferUpdateManyWithoutSellersInput";

export type SellerUpdateInput = {
  offers?: OfferUpdateManyWithoutSellersInput;
  role?: string | null;
};
