import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
  error: string;  

  constructor(message: string, error?: string) {
    super(message, HttpStatus.NOT_FOUND)
    this.error = error;  
  } ;
};