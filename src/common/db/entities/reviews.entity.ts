import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Movies } from "./movies.entity";
import { IReviews } from "../models/reviews.model";

@Entity('reviews')
export class Reviews implements IReviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  review_text: string;

  @Column('varchar')
  review_data: string;

  @Column('bool')
  is_spoiler: boolean;

  @ManyToOne(type => User, user => user.reviews)
  user: User;

  @ManyToOne(type => Movies, movies => movies.reviews)
  movie: Movies
}