import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UserEntity } from 'src/entities/user.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import {JwtModule} from '@nestjs/jwt'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), JwtModule.register({
    secret: 'access_token_key',
    signOptions: {expiresIn: '5d'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
