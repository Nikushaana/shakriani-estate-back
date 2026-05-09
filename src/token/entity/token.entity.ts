import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import { Admin } from 'src/admin/entity/admin.entity';

@Entity('tokens')
export class Token {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    token: string;

    @OneToOne(() => Admin, (admin) => admin.token, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'admin_id' })
    admin: Admin;

    @Column()
    admin_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
