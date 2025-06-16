import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "../../../core/service/auth.service";
import {UserLoginDto, UserLoginResponseDto} from "../../../core/domain/dto/user.login";
import {AuthControllerPort} from "../../../core/ports/in/controllers";
import {Public} from "@shared/decorator/public";

@Controller('auth')
export class AuthController implements AuthControllerPort {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    async login(@Body() body: UserLoginDto) : Promise<UserLoginResponseDto> {
        return this.authService.logIn(body);
    }
}