import Joi = require("@hapi/joi");
import { UserRegisterRequest } from "./userRegister.request";

export const UserRegisterRequestSchema = Joi.object<UserRegisterRequest>({
  email: Joi.string().email().required(),
  surname: Joi.string().max(10).required()  
});