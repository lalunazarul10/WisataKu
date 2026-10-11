
import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Registrasi akun wisatawan' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['nama', 'email', 'password'],
      properties: {
        nama: { type: 'string', example: 'Nazarul Wisata' },
        email: { type: 'string', example: 'nazarulbonjol@gmail.com' },
        password: { type: 'string', example: 'Nazarul123' },
      },
    },
  })
  async register(
    @Body()
    data: {
      nama: string;
      email: string;
      password: string;
    },
  ) {
    return this.authService.register(data);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login pengguna dan mendapatkan token JWT' })
  @ApiBody({
    schema: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: { type: 'string', example: 'nazarulbonjol@gmail.com' },
        password: { type: 'string', example: 'Nazarul123' },
      },
    },
  })
  async login(
    @Body()
    data: {
      email: string;
      password: string;
    },
  ) {
    return this.authService.login(data);
  }
}
