import { Movies } from "../entities/movies.entity";

export interface IDirectors {
  id: number;
  name: string;
  movie: Movies;  
}