import { Module } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Filiacao } from './entity/filiacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Filiacao])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
