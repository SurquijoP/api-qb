import {IsString, Matches, MinLength} from "class-validator";
import {
    EMAIL_LENGTH_RULE_PATTERN,
    EMAIL_LENGTH_RULE_PATTERN_MSG,
    PASSWORD_LENGTH_MSG, PASSWORD_RULE_PATTERN, PASSWORD_RULE_PATTERN_MSG
} from "@shared/constants/validator-class";

export class UserLoginDto {
    @IsString()
    @Matches(EMAIL_LENGTH_RULE_PATTERN, {
        message: EMAIL_LENGTH_RULE_PATTERN_MSG,
    })
    user: string;
    @IsString()
    @MinLength(8, {
        message: PASSWORD_LENGTH_MSG,
    })
    @Matches(PASSWORD_RULE_PATTERN, {
        message:PASSWORD_RULE_PATTERN_MSG,
    })
    password: string;
}

export interface TokenClaims {
    sub: string;
    email: string;
    name: string;
    role: string;
    country: string;
}

export interface UserLoginResponseDto {
    access_token: string;
    expires_in: string;
    user: TokenClaims;
}