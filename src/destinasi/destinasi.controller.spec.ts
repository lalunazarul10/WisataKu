
import { Test, TestingModule } from '@nestjs/testing';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

describe('DestinasiController', () => {
  let controller: DestinasiController;

  const destinasiServiceMock = {
    findAll: jest.fn().mockReturnValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinasiController],
      providers: [
        {
          provide: DestinasiService,
          useValue: destinasiServiceMock,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<DestinasiController>(DestinasiController);
    jest.clearAllMocks();
  });

  it('controller harus terdefinisi', () => {
    expect(controller).toBeDefined();
  });

  it('harus mengembalikan daftar destinasi', () => {
    destinasiServiceMock.findAll.mockReturnValue([]);

    expect(controller.findAll()).toEqual([]);
    expect(destinasiServiceMock.findAll).toHaveBeenCalled();
  });
});
