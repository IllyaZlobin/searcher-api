import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movies } from "./movies.entity";
import { IActors } from "../models/actors.model";

@Entity('actors')
export class Actors implements IActors {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  list: string;

  @ManyToOne(type => Movies, movies => movies.actors)
  movie: Movies;
}