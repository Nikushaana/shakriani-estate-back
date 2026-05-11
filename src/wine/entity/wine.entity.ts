import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('wines')
export class Wine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    image: string;

    @Column()
    image_public_id: string;

    @Column('text')
    image_alt: string;
    
    @Column('text')
    image_alt_en: string;
    
    @Column('text')
    image_alt_ru: string;

    @Column('text')
    name: string;
    
    @Column('text')
    name_en: string;
    
    @Column('text')
    name_ru: string;

    @Column('text')
    type: string;
    
    @Column('text')
    type_en: string;
    
    @Column('text')
    type_ru: string;

    @Column('text')
    year: string;

    @Column('text')
    price: string;

    @Column('text')
    description: string;
    
    @Column('text')
    description_en: string;
    
    @Column('text')
    description_ru: string;

    @Column('text')
    alc: string;

    @Column('text')
    vol: string;

    @Column('text')
    origin: string;
    
    @Column('text')
    origin_en: string;
    
    @Column('text')
    origin_ru: string;

    @Column('text')
    serve: string;

    @Column('text')
    meta_title: string;
    
    @Column('text')
    meta_title_en: string;
    
    @Column('text')
    meta_title_ru: string;

    @Column('text')
    meta_description: string;
    
    @Column('text')
    meta_description_en: string;
    
    @Column('text')
    meta_description_ru: string;

    @Column({ unique: true })
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}