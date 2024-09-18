/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OfferCreateNestedManyWithoutSellersInput } from "./OfferCreateNestedManyWithoutSellersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SellerCreateInput {
  @ApiProperty({
    required: false,
    type: () => OfferCreateNestedManyWithoutSellersInput,
  })
  @ValidateNested()
  @Type(() => OfferCreateNestedManyWithoutSellersInput)
  @IsOptional()
  @Field(() => OfferCreateNestedManyWithoutSellersInput, {
    nullable: true,
  })
  offers?: OfferCreateNestedManyWithoutSellersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  role?: string | null;
}

export { SellerCreateInput as SellerCreateInput };