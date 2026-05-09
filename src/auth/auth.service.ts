import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import * as bcrypt from 'bcrypt';
import { instanceToPlain } from 'class-transformer';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService,
        private readonly tokenService: TokenService,
    ) { }

    async adminRegister(email: string, password: string) {
        const exists = await this.adminService.findByEmail(email);
        if (exists) throw new ConflictException('Admin already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await this.adminService.create(email, hashedPassword);

        return `admin ${admin.email} registered`;
    }

    async adminLogin(email: string, password: string) {
        const admin = await this.adminService.findByEmail(email);
        if (!admin) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');

        const token = this.jwtService.sign({ id: admin.id, email: admin.email });

        await this.tokenService.saveToken(admin.id, token);

        return {
            message: `admin ${admin.email} logged in successfully`,
            token,
            user: instanceToPlain(admin),
        };
    }
}
