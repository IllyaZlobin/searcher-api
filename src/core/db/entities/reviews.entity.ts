import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "src/core/db/entities/user.entity";
import { Movies } from "src/core/db/entities/movies.entity";

@Entity('reviews')
export class Reviews {
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