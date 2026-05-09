import { forwardRef, Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    forwardRef(() => AuthModule),
    TokenModule
  ],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule { }
