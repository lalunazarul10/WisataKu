import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateDestinasiInput {
  @Field()
  nama: string;

  @Field()
  kategori: string;

  @Field(() => Int)
  hargaTiket: number;
}