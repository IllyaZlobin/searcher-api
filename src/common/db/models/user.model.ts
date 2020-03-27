import { Country } from "../entities/country.entity";
import { City } from "../entities/city.entity";

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  gender: string;
  age: number;
  photo: string;
  city: City;
  country: Country;
  web: string;  
}