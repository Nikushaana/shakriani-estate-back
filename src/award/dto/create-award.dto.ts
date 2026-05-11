import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAwardDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsNotEmpty()
    text_en: string;
    
    @IsString()
    @IsNotEmpty()
    text_ru: string;
}