import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInputs{
    @Field()
    email: string;

    @Field()
    password: string;
}