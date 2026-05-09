import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() body: RegisterAdminDto) {
        return this.authService.adminRegister(body.email, body.password);
    }

    @Post('login')
    login(@Body() body: LoginAdminDto) {
        return this.authService.adminLogin(body.email, body.password);
    }
}
