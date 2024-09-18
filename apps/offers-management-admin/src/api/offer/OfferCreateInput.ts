import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SellerWhereUniqueInput } from "../seller/SellerWhereUniqueInput";

export type OfferCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  offerDetails?: string | null;
  product?: ProductWhereUniqueInput | null;
  seller?: SellerWhereUniqueInput | null;
};
