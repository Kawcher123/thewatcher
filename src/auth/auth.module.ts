import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './auth.constant';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    controllers:[AuthController],
    imports:[UsersModule,PassportModule,  JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '24h' },
      }),],
    providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
