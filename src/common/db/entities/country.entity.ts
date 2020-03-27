import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Actor } from "./actor.entity";
import { User } from "./user.entity";
import { ICountry } from "../models/country.model";

@Entity('country')
export class Country implements ICountry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  name: string;

  @OneToMany(type => Actor, actor => actor.country)
  actors: Actor[]

  @OneToMany(type => User, user => user.country)
  users: User[]
}