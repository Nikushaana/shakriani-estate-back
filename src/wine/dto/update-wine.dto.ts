import { IsOptional, IsString } from 'class-validator';

export class UpdateWineDto {
    @IsOptional()
    @IsString()
    image_alt?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    type?: string;

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
    alc?: string;

    @IsOptional()
    @IsString()
    vol?: string;

    @IsOptional()
    @IsString()
    origin?: string;

    @IsOptional()
    @IsString()
    serve?: string;

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