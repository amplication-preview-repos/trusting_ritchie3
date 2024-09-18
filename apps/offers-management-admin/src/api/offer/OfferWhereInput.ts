import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type OfferWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  offerDetails?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  seller?: SellerWhereUniqueInput;
};
