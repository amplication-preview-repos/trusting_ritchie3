import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "role";

export const CustomerTitle = (record: TCustomer): string => {
  return record.role?.toString() || String(record.id);
};
