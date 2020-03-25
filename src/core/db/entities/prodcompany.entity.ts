import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movies } from "src/core/db/entities/movies.entity";
import { IProdCompany } from "../models/prodcompany.model";

@Entity('productioncompany')
export class ProdCompany implements IProdCompany {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar')
  company: string;

  @Column('varchar')
  country: string;

  @Column('varchar')
  headquarters: string;

  @Column('int')
  est: number;

  @Column('varchar')
  notes: string;

  @OneToMany(type => Movies, movies => movies.production)
  movies: Movies[]
}