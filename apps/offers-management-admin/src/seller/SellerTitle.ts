import { Seller as TSeller } from "../api/seller/Seller";

export const SELLER_TITLE_FIELD = "role";

export const SellerTitle = (record: TSeller): string => {
  return record.role?.toString() || String(record.id);
};
