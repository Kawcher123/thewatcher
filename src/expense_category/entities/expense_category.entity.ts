
import { Service } from "src/services/entities/service.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ExpenseCategory {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    name:string

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
