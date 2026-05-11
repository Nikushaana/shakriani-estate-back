import { IsOptional, IsString } from 'class-validator';

export class UpdateAwardDto {
    @IsOptional()
    @IsString()
    text?: string;
    
    @IsOptional()
    @IsString()
    text_en?: string;
    
    @IsOptional()
    @IsString()
    text_ru?: string;
}