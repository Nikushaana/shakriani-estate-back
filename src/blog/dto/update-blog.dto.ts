import { IsOptional, IsString } from 'class-validator';

export class UpdateBlogDto {
    @IsOptional()
    @IsString()
    image_alt?: string;
    
    @IsOptional()
    @IsString()
    image_alt_en?: string;
    
    @IsOptional()
    @IsString()
    image_alt_ru?: string;

    @IsOptional()
    @IsString()
    small_text?: string;
    
    @IsOptional()
    @IsString()
    small_text_en?: string;
    
    @IsOptional()
    @IsString()
    small_text_ru?: string;

    @IsOptional()
    @IsString()
    text?: string;
    
    @IsOptional()
    @IsString()
    text_en?: string;
    
    @IsOptional()
    @IsString()
    text_ru?: string;

    @IsOptional()
    @IsString()
    meta_title?: string;
    
    @IsOptional()
    @IsString()
    meta_title_en?: string;
    
    @IsOptional()
    @IsString()
    meta_title_ru?: string;

    @IsOptional()
    @IsString()
    meta_description?: string;
    
    @IsOptional()
    @IsString()
    meta_description_en?: string;
    
    @IsOptional()
    @IsString()
    meta_description_ru?: string;

    @IsOptional()
    @IsString()
    slug?: string;
}