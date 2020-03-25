import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from '../../core/db/entities/movies.entity';
import { MpaaRating } from '../../core/db/entities/mpaa.entity';
import { ProdCompany } from 'src/core/db/entities/prodcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies, MpaaRating, ProdCompany])],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesModule]
})
export class MoviesModule {}
