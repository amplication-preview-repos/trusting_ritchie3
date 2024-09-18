import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OfferTitle } from "../offer/OfferTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="offers" reference="Offer">
          <SelectArrayInput
            optionText={OfferTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <DateTimeInput label="toDate" source="toDate" />
      </SimpleForm>
    </Create>
  );
};
