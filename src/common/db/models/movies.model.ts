import { MpaaRating } from "../entities/mpaa.entity";
import { ProdCompany } from "../entities/prodcompany.entity";

export interface IMovies {
  id: number;
  year: number;
  runtime: number;
  votes: number;
  title: string;
  description: string;
  rating: number;
  revenue: number;
  mpaa: MpaaRating;
  production: ProdCompany,
  poster: string;  
}