import { Offer } from "../offer/Offer";

export type Customer = {
  createdAt: Date;
  id: string;
  offers?: Array<Offer>;
  role: string | null;
  updatedAt: Date;
};
