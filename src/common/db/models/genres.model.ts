import { Movies } from "../entities/movies.entity";

export interface IGenres {
  id: number;
  movie: Movies;
  genre: string;  
}