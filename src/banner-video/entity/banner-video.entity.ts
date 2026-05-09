import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('banner-videos')
export class BannerVideo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    video: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}