import {UserLoginDto, UserLoginResponseDto} from "../../domain/dto/user.login";

export interface AuthControllerPort {
    login(body: UserLoginDto) : Promise<UserLoginResponseDto>
}