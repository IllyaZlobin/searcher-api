import { JoiRegisteredSchemas } from "src/core/pipes/validation/joiRegisteredSchemas";
import { UserRegisterRequestSchema } from "src/modules/user/dto/register/userRegister.schema";

export const SearcherValidationSchemas: JoiRegisteredSchemas = {
  UserRegisterRequest: UserRegisterRequestSchema
}