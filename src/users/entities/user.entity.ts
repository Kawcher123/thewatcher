import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn({type:"int"})
    id: number;

    @Column({type:"varchar"})
    name:string
    
    @Column({type:"varchar"})
    email:string

    
    @Column({type:"varchar"})
    phone:string

    
    @Column({type:"varchar"})
    blood_group:string

    
    @Column({type:"varchar"})
    password:string

    @Column({type: "int",default:2})
    roleId: number;

    @ManyToOne(() => Role)
    @JoinColumn({name: 'roleId'})
    role: Role


    @Column({type:'int',default:1})
    isActive: number;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}
