import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateWineDto {
    @IsString()
    @IsNotEmpty()
    image_alt: string;
    
    @IsString()
    @IsNotEmpty()
    image_alt_en: string;
    
    @IsString()
    @IsNotEmpty()
    image_alt_ru: string;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    name_en: string;
    
    @IsString()
    @IsNotEmpty()
    name_ru: string;

    @IsString()
    @IsNotEmpty()
    type: string;
    
    @IsString()
    @IsNotEmpty()
    type_en: string;
    
    @IsString()
    @IsNotEmpty()
    type_ru: string;

    @IsString()
    @IsNotEmpty()
    year: string;

    @IsString()
    @IsNotEmpty()
    price: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsString()
    @IsNotEmpty()
    description_en: string;
    
    @IsString()
    @IsNotEmpty()
    description_ru: string;

    @IsString()
    @IsNotEmpty()
    alc: string;

    @IsString()
    @IsNotEmpty()
    vol: string;

    @IsString()
    @IsNotEmpty()
    origin: string;
    
    @IsString()
    @IsNotEmpty()
    origin_en: string;
    
    @IsString()
    @IsNotEmpty()
    origin_ru: string;

    @IsString()
    @IsNotEmpty()
    serve: string;

    @IsString()
    @IsNotEmpty()
    meta_title: string;
    
    @IsString()
    @IsNotEmpty()
    meta_title_en: string;
    
    @IsString()
    @IsNotEmpty()
    meta_title_ru: string;

    @IsString()
    @IsNotEmpty()
    meta_description: string;
    
    @IsString()
    @IsNotEmpty()
    meta_description_en: string;
    
    @IsString()
    @IsNotEmpty()
    meta_description_ru: string;

    @IsString()
    @IsNotEmpty()
    slug: string;
}