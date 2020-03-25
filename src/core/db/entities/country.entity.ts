import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Actor } from "src/core/db/entities/actor.entity";
import { User } from "src/core/db/entities/user.entity";
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