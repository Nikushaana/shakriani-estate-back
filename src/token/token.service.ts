import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entity/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepo: Repository<Token>,
  ) {}

  async findByToken(token: string) {
  return this.tokenRepo.findOne({
    where: { token },
    relations: ['admin'],
  });
}

  async findByAdminId(adminId: string) {
    return this.tokenRepo.findOne({ where: { admin_id: adminId } });
  }

  async saveToken(adminId: string, token: string) {
    const existing = await this.findByAdminId(adminId);

    if (existing) {
      existing.token = token;
      return this.tokenRepo.save(existing);
    }

    const newToken = this.tokenRepo.create({
      admin_id: adminId,
      token,
    });

    return this.tokenRepo.save(newToken);
  }
}
