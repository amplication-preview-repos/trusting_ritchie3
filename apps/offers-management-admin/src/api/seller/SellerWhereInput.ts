import { StringFilter } from "../../util/StringFilter";
import { OfferListRelationFilter } from "../offer/OfferListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SellerWhereInput = {
  id?: StringFilter;
  offers?: OfferListRelationFilter;
  role?: StringNullableFilter;
};
