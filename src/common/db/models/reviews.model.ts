import { User } from "../entities/user.entity";
import { Movies } from "../entities/movies.entity";

export interface IReviews {
  id: number;
  review_text: string;
  review_data: string;
  user: User;
  movie: Movies;
  is_spoiler: boolean;  
}