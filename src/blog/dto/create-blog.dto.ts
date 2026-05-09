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
    small_text: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsString()
    @IsNotEmpty()
    meta_title: string;

    @IsString()
    @IsNotEmpty()
    meta_description: string;

    @IsString()
    @IsNotEmpty()
    slug: string;
}