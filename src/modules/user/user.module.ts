import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../common/db/entities/user.entity';
import { Country } from '../../common/db/entities/country.entity';
import { City } from '../../common/db/entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Country, City])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
