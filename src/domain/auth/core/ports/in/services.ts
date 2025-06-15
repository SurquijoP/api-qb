import {UserLoginDto, UserLoginResponseDto} from "../../domain/dto/user.login";

export interface AuthServicePort {
    logIn(loginInput: UserLoginDto): Promise<UserLoginResponseDto>
}