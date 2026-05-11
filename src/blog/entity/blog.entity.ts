import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('blogs')
export class Blog {
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
    small_text: string;
    
    @Column('text')
    small_text_en: string;
    
    @Column('text')
    small_text_ru: string;

    @Column('text')
    text: string;
    
    @Column('text')
    text_en: string;
    
    @Column('text')
    text_ru: string;

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