import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { City } from "./city.entity";
import { Country } from "./country.entity";
import { Reviews } from "./reviews.entity";
import { IUser } from "../models/user.model";

@Entity('user')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  email: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  surname: string;

  @Column('varchar')
  gender: string;

  @Column('int')
  age: number;

  @Column('longblob')
  photo: string;

  @Column('varchar')
  web: string;

  @ManyToOne(type => City, city => city.users)
  city: City;

  @ManyToOne(type => Country, country => country.users)
  country: Country;

  @OneToMany(type => Reviews, reviews => reviews.user)
  reviews: Reviews[]

}