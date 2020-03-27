import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiQuery } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}
}
