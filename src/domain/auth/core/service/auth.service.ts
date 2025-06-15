import {Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {FindOneUserRepository} from "@users//adapters/outgoing/repository/find-one-user";
import {TokenClaims, UserLoginDto, UserLoginResponseDto} from "../domain/dto/user.login";
import * as bcrypt from 'bcryptjs';
import {JwtService} from "@nestjs/jwt";
import {User} from "@users//core/domain/schema/users.schema";
import {EXPIRES_IN_JWT} from "@shared/constants/globals.constants";
import {AuthServicePort} from "../ports/in/services";
import {LoggerCustomService} from "@shared/services/logger-custom.service";
import {GENERAL_ERROR_LOGIN_MSG} from "@shared/constants/errors";
import {UserDto} from "@users//core/domain/dto/users";


@Injectable()
export class AuthService implements AuthServicePort {
    private readonly logger: LoggerCustomService = new LoggerCustomService(
        AuthService.name,
    );
    constructor(
        @Inject()
        private readonly findOneUserRepository: FindOneUserRepository,
        private readonly jwtService: JwtService
    ) {}

    async logIn(loginInput: UserLoginDto): Promise<UserLoginResponseDto> {

        const user: UserDto = await this.findOneUserRepository.findByUser(loginInput.user);
        if (!user) {
            this.logger.warn("[logIn] Usuario no encontrado: ", loginInput.user);
            throw new UnauthorizedException(GENERAL_ERROR_LOGIN_MSG)
        };

        const valid = await this.validatePassword(loginInput.password, user.password);
        if (!valid) {
            this.logger.warn("[logIn] Contraseña incorrecta: ", loginInput.user);
            throw new UnauthorizedException(GENERAL_ERROR_LOGIN_MSG);
        }

        const payload : TokenClaims  = {
            sub: user._id,
            email: user.email,
            name: user.name,
            country: user.country,
            role: user.role,
        }

        const token = this.jwtService.sign(payload);

        return {
            access_token: token,
            expires_in: EXPIRES_IN_JWT,
            user: payload,
        };
    }

    async validatePassword(password: string, hashed: string): Promise<boolean> {
        return bcrypt.compare(password, hashed);
    }
}