import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Actor } from "./actor.entity";
import { User } from "./user.entity";
import { ICity } from "../models/city.model";

@Entity('city')
export class City implements ICity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  name: string;

  @Column('varchar')
  name_ancii: string;

  @Column('double')
  lat: number;

  @Column('double')
  lng: number;

  @Column('varchar')
  country: string;

  @Column('varchar')
  iso2: string;

  @Column('varchar')
  iso3: string;

  @Column('bigint')
  population: number;

  @OneToMany(type => Actor, actor => actor.city)
  actors: Actor[]

  @OneToMany(type => User, user => user.city)
  users: User[]
}