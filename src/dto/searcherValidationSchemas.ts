import { JoiRegisteredSchemas } from "src/common/pipes/validation/joiRegisteredSchemas";
import { UserRegisterRequestSchema } from "src/dto/user/register/userRegister.schema";

export const SearcherValidationSchemas: JoiRegisteredSchemas = {
  UserRegisterRequest: UserRegisterRequestSchema
}