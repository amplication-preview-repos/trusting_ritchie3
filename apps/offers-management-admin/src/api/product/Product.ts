import { Offer } from "../offer/Offer";

export type Product = {
  createdAt: Date;
  description: string | null;
  fromDate: Date | null;
  id: string;
  name: string | null;
  offers?: Array<Offer>;
  price: number | null;
  toDate: Date | null;
  updatedAt: Date;
};
