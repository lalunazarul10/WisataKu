import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Destinasi {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field()
  kategori: string;

  @Field(() => Int)
  hargaTiket: number;
}