import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BeneficiaryContact {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    name:string

    
    @Column({type:'varchar'})
    phone:string

    
    @Column({type:'varchar'})
    email:string

    @Column()
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'userId'})
    user: User

    @Column({type:'int',default:1})
    isActive: number;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}
