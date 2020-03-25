import { HttpException, HttpStatus } from "@nestjs/common"

export class ValidationException extends HttpException {
  errors: string[];

  constructor(error: string);
  constructor(errors: string[]);
  constructor(message: string, property?: string[]);
  constructor(errorsOrMessage: string | string[], property: string[] = []) {
    super('The model is not valid', HttpStatus.BAD_REQUEST);

    if (Array.isArray(errorsOrMessage)) {
      this.errors = errorsOrMessage
    } else if (typeof errorsOrMessage === 'string') {
      this.errors = [errorsOrMessage]
    }
  }
}