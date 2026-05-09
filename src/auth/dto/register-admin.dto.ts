import { IsString, IsEmail } from 'class-validator';

export class RegisterAdminDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
