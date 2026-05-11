import { IsOptional, IsString } from 'class-validator';

export class UpdateWineDto {
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
    name?: string;
    
    @IsOptional()
    @IsString()
    name_en?: string;
    
    @IsOptional()
    @IsString()
    name_ru?: string;

    @IsOptional()
    @IsString()
    type?: string;
    
    @IsOptional()
    @IsString()
    type_en?: string;
    
    @IsOptional()
    @IsString()
    type_ru?: string;

    @IsOptional()
    @IsString()
    year?: string;

    @IsOptional()
    @IsString()
    price?: string;

    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsString()
    description_en?: string;
    
    @IsOptional()
    @IsString()
    description_ru?: string;

    @IsOptional()
    @IsString()
    alc?: string;

    @IsOptional()
    @IsString()
    vol?: string;

    @IsOptional()
    @IsString()
    origin?: string;
    
    @IsOptional()
    @IsString()
    origin_en?: string;
    
    @IsOptional()
    @IsString()
    origin_ru?: string;

    @IsOptional()
    @IsString()
    serve?: string;

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