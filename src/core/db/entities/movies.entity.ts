import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { MpaaRating } from "./mpaa.entity";
import { ProdCompany } from "src/core/db/entities/prodcompany.entity";
import { Reviews } from "src/core/db/entities/reviews.entity";
import { Actors } from "./actors.entity";
import { Genres } from "./genres.entity";
import { Directors } from "./directors.entity";
import { IMovies } from "../models/movies.model";

@Entity('movies')
export class Movies implements IMovies {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('int')
  year: number

  @Column('int')
  runtime: number;

  @Column('int')
  votes: number;

  @Column('longtext')
  title: string;

  @Column('longtext')
  description: string;

  @Column('double')
  rating: number;

  @Column('double')
  revenue: number;

  @ManyToOne(type => MpaaRating, mpaa => mpaa.movies)
  mpaa: MpaaRating;

  @ManyToOne(type => ProdCompany, prodcomp => prodcomp.movies)
  production: ProdCompany

  @OneToMany(type => Reviews, reviews => reviews.movie)
  reviews: Reviews[]

  @OneToMany(type => Actors, actors => actors.movie)
  actors: Actors[]

  @OneToMany(type => Genres, genres => genres.movie)
  genres: Genres[]

  @OneToMany(type => Directors, directors => directors.movie)
  directors: Directors[]

  poster: string;
}