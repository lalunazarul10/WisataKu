
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Destinasi API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /destinasi harus mengembalikan status 200 dan daftar destinasi', async () => {
    const response = await request(app.getHttpServer())
      .get('/destinasi')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /destinasi tanpa token harus ditolak dengan status 401', async () => {
    await request(app.getHttpServer())
      .post('/destinasi')
      .send({
        nama: 'Destinasi Uji',
        kategori: 'Pantai',
        hargaTiket: 10000,
      })
      .expect(401);
  });
});
