import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: String
  })
  @ApiQuery({ name: 'name', type: String })
  getHello(@Query() name: string): string {
    console.log(name);
    return `Hello, ${name}!`;
  }
}
