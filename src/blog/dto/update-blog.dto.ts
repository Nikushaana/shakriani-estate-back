import { IsOptional, IsString } from 'class-validator';

export class UpdateBlogDto {
    @IsOptional()
    @IsString()
    image_alt?: string;

    @IsOptional()
    @IsString()
    small_text?: string;

    @IsOptional()
    @IsString()
    text?: string;

    @IsOptional()
    @IsString()
    meta_title?: string;

    @IsOptional()
    @IsString()
    meta_description?: string;

    @IsOptional()
    @IsString()
    slug?: string;
}