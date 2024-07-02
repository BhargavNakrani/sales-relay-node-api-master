import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto, SignUpDto } from './dto/auth.dto';
import { UserCoreService } from 'src/core/user-core/user-core.service';
import { PasswordCoreService } from 'src/core/password-core/password-core.service';
import { UserSessionCoreService } from 'src/core/user-session-core/user-core.service';
import { JwtService } from '@nestjs/jwt';
import { authMessages, userMessage } from 'src/shared/keys/user.key';

@Injectable()
export class AuthService {
  constructor(
    private userCoreService: UserCoreService,
    private userSessionCoreService: UserSessionCoreService,
    private passwordCoreService: PasswordCoreService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { firstName, lastName, email, password } = signUpDto;

    const isExist = await this.userCoreService.findFirst({
      where: { email, isDeleted: false },
    });

    if (isExist) {
      throw new BadRequestException(userMessage.USER_ALREADY_EXIST);
    }

    const user = await this.userCoreService.create({
      data: { firstName, lastName, email },
    });

    await this.passwordCoreService.create({
      data: { userId: user.id, password },
    });

    const authToken = await this.jwtService.sign({ id: user.id }).toString();

    const userSession = await this.userSessionCoreService.create({
      data: { userId: user.id, authToken },
    });

    return { ...user, userSession };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const userExist = await this.userCoreService.findFirst({
      where: { email, isDeleted: false },
    });

    if (!userExist) {
      throw new BadRequestException(userMessage.USER_NOT_FOUND);
    }

    const userPassword = await this.passwordCoreService.findFirst({
      where: { userId: userExist.id },
    });

    if (password === userPassword.password) {
      const authToken = await this.jwtService
        .sign({ id: userExist.id })
        .toString();

      const userSession = await this.userSessionCoreService.create({
        data: { userId: userExist.id, authToken },
      });

      return { ...userExist, userSession };
    } else {
      throw new BadRequestException(authMessages.INVALID_CREDENTIALS_ERROR);
    }
  }
}
