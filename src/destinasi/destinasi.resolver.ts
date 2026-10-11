
import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Destinasi } from './entities/destinasi.entity';
import { DestinasiService } from './destinasi.service';
import { CreateDestinasiInput } from './dto/create-destinasi.input';

@Resolver(() => Destinasi)
export class DestinasiResolver {
  constructor(
    private readonly destinasiService: DestinasiService,
  ) {}

  @Query(() => Destinasi, { name: 'destinasi' })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.destinasiService.findOne(id);
  }

  @Query(() => [Destinasi], { name: 'cariDestinasi' })
  findAll(
    @Args('kategori', { nullable: true }) kategori?: string,
  ) {
    return this.destinasiService.findAll(kategori);
  }

  @Mutation(() => Destinasi, { name: 'tambahDestinasi' })
  createDestinasi(
    @Args('nama') nama: string,
    @Args('kategori') kategori: string,
    @Args('hargaTiket', { type: () => Int }) hargaTiket: number,
  ) {
    console.log('DATA MUTATION:', { nama, kategori, hargaTiket });

    return this.destinasiService.create({
      nama,
      kategori,
      hargaTiket,
    });
  }
}