
import { Module } from '@nestjs/common';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';
import { DestinasiResolver } from './destinasi.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [DestinasiController],
  providers: [DestinasiService, DestinasiResolver],
})
export class DestinasiModule {}
