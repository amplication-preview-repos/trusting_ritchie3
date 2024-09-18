import { Offer } from "../offer/Offer";

export type Seller = {
  createdAt: Date;
  id: string;
  offers?: Array<Offer>;
  role: string | null;
  updatedAt: Date;
};
