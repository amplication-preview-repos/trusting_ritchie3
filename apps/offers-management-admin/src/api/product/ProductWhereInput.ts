import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfferListRelationFilter } from "../offer/OfferListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  fromDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  offers?: OfferListRelationFilter;
  price?: FloatNullableFilter;
  toDate?: DateTimeNullableFilter;
};
