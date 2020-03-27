import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";
import { IDirectors } from "../models/directors.model";

@Entity('directors')
export class Directors implements IDirectors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  name: string;

  @ManyToOne(type => Movies, movies => movies.directors)
  movie: Movies;
}