import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  offerDetails?: SortOrder;
  productId?: SortOrder;
  sellerId?: SortOrder;
  updatedAt?: SortOrder;
};
