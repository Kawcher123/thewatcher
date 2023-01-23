import { Role } from 'src/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

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


}
