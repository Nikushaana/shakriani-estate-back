import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateBlogDto {
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
    small_text: string;

    @IsString()
    @IsNotEmpty()
    small_text_en: string;

    @IsString()
    @IsNotEmpty()
    small_text_ru: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsNotEmpty()
    text_en: string;

    @IsString()
    @IsNotEmpty()
    text_ru: string;

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