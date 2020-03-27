import { Movies } from "../entities/movies.entity";

export interface IActors {
  id: number;
  list: string;
  movie: Movies  
}