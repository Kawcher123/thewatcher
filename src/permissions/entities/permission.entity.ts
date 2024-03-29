import { Role } from 'src/roles/entities/role.entity';
import { Service } from 'src/services/entities/service.entity';
import { Entity, Column,JoinColumn, PrimaryGeneratedColumn,ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Permission {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleId: number;
  
    @ManyToOne(() => Role)
    @JoinColumn({name: 'roleId'})
    role: Role

    @Column()
    serviceId: number;

    @ManyToOne(() => Service)
    @JoinColumn({name: 'serviceId'})
    service: Service

    @Column({type:'int',default:1})
    isActive: number;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
