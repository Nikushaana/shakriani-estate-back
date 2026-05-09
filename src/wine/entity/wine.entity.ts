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

    @Column('text')
    image_alt: string;

    @Column('text')
    name: string;

    @Column('text')
    type: string;
    
    @Column('text')
    year: string;
    
    @Column('text')
    price: string;
    
    @Column('text')
    description: string;
    
    @Column('text')
    alc: string;
    
    @Column('text')
    vol: string;
    
    @Column('text')
    origin: string;
    
    @Column('text')
    serve: string;

    @Column('text')
    meta_title: string;

    @Column('text')
    meta_description: string;

    @Column({ unique: true })
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}