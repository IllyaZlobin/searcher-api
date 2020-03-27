import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movies } from "./movies.entity";
import { IMpaa } from "../models/mpaa.model";

@Entity('mpaarating')
export class MpaaRating implements IMpaa {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('longtext')
  title: string;

  @Column('longtext')
  description: string;

  @OneToMany(type => Movies, movies => movies.mpaa)
  movies: Movies[]
}