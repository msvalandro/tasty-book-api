import { Controller, Get, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO this route is for development only, remove later
  @Get()
  async findAll() {
    return await this.authService.findAll();
  }

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    return await this.authService.findByLogin(userDTO);
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    return await this.authService.create(userDTO);
  }
}
