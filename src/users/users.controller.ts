import { Controller, Get, Post, Put, Body } from '@nestjs/common';

import { User } from './user.model';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  showAllUsers() {
    return this.usersService.showAll();
  }

  @Post('register')
  register(@Body() data: User) {
    return this.usersService.register(data);
  }

  @Post('login')
  login(@Body() data: User) {
    return this.usersService.login(data);
  }
}
