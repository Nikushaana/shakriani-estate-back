import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { Repository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepo: Repository<Admin>,
    ) { }

    async create(email: string, password: string): Promise<Admin> {
        const exists = await this.adminRepo.findOne({ where: { email } });
        if (exists) throw new ConflictException('Admin already exists');

        const admin = this.adminRepo.create({ email, password });
        return this.adminRepo.save(admin);
    }

    async findByEmail(email: string): Promise<Admin | null> {
        return this.adminRepo.findOne({ where: { email } });
    }

    async findById(id: string) {
        const admin = await this.adminRepo.findOne({ where: { id } });
        if (!admin) throw new NotFoundException('Admin not found');
        return instanceToPlain(admin);
    }
}
