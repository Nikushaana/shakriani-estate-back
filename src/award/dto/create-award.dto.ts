import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAwardDto {
    @IsString()
    @IsNotEmpty()
    text: string;
}