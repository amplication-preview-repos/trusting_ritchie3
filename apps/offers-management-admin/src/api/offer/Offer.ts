import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";
import { Seller } from "../seller/Seller";

export type Offer = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  offerDetails: string | null;
  product?: Product | null;
  seller?: Seller | null;
  updatedAt: Date;
};
