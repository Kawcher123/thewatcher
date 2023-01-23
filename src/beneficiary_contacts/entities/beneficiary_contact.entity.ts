import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

}
