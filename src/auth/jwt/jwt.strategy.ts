import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';
import { AdminService } from 'src/admin/admin.service';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly adminService: AdminService,
    private readonly tokenService: TokenService,
  ) {
    const options: StrategyOptionsWithRequest = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'supersecret',
      passReqToCallback: true,
    };

    super(options);
  }

  async validate(req: any, payload: any) {
    const token = req.headers.authorization.split(' ')[1];

    const tokenRecord = await this.tokenService.findByToken(token);
    if (!tokenRecord) throw new UnauthorizedException('Token invalid or logged out');

    const admin = await this.adminService.findById(payload.id);
    if (!admin) throw new UnauthorizedException('Admin not found');

    return admin;
  }
}
