import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  @Get()
  @ApiOperation({
    summary: 'Menampilkan daftar destinasi wisata',
  })
  @ApiResponse({
    status: 200,
    description: 'Daftar destinasi berhasil diambil',
  })
  findAll() {
    return 'Daftar destinasi wisata akan tampil di sini';
  }

  @Post()
  @ApiOperation({
    summary: 'Menambahkan destinasi baru (khusus admin)',
  })
  @ApiResponse({
    status: 201,
    description: 'Destinasi berhasil dibuat',
  })
  @ApiResponse({
    status: 400,
    description: 'Data tidak valid',
  })
  create(@Body() dto: CreateDestinasiDto) {
    return dto;
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Menampilkan detail destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Detail destinasi berhasil diambil',
  })
  findOne(@Param('id') id: string) {
    return {
      id: Number(id),
      nama: 'Pantai Kuta Mandalika',
      kategori: 'Pantai',
      hargaTiket: 15000,
    };
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Mengubah data destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil diperbarui',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return {
      id: Number(id),
      message: 'Destinasi berhasil diperbarui',
      data: dto,
    };
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Menghapus destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil dihapus',
  })
  remove(@Param('id') id: string) {
    return {
      id: Number(id),
      message: 'Destinasi berhasil dihapus',
    };
  }
}