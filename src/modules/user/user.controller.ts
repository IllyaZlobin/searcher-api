import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequest } from './dto/register/userRegister.request';

@Controller('user')
export class UserController {
  
  constructor(private readonly userService: UserService) {}
  
  @Post('/register')
  async register(@Body() model: UserRegisterRequest) {
   return { model: model }
  }
}
