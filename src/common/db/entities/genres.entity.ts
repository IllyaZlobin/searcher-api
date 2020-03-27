import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";
import { IGenres } from "../models/genres.model";

@Entity('genres')
export class Genres implements IGenres {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  genre: string;

  @ManyToOne(type => Movies, movies => movies.genres)
  movie: Movies
}