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
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

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
    alc: string;

    @IsString()
    @IsNotEmpty()
    vol: string;

    @IsString()
    @IsNotEmpty()
    origin: string;

    @IsString()
    @IsNotEmpty()
    serve: string;

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