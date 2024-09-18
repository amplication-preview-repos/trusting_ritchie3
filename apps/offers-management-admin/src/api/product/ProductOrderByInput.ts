import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  fromDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  toDate?: SortOrder;
  updatedAt?: SortOrder;
};
