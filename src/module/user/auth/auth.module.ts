import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserCoreModule } from 'src/core/user-core/user-core.module';
import { PasswordCoreModule } from 'src/core/password-core/password-core.module';
import { UserSessionCoreModule } from 'src/core/user-session-core/user-session-session-core.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'a@b0=!cd)',
    }),
    UserCoreModule,
    UserSessionCoreModule,
    PasswordCoreModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
