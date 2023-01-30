import { BeneficiaryContact } from "src/beneficiary_contacts/entities/beneficiary_contact.entity";
import { PaymentMethod } from "src/payment_methods/entities/payment_method.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MyLoan {

   @PrimaryGeneratedColumn()
   id:number

   @Column({type:"varchar"})
   loanType:string

   @Column({type:"int"})
   loanAmount:number

   @Column({type:"int"})
   userId:number


   @ManyToOne(() => User)
   @JoinColumn({name: 'userId'})
   user: User

   @Column({type:"int"})
   beneficiaryId:number

   @ManyToOne(() => BeneficiaryContact)
   @JoinColumn({name: 'beneficiaryId'})
   beneficiary: BeneficiaryContact


   @Column({type:'int'})
   paymentMethodId: number;

   @ManyToOne(() => PaymentMethod)
   @JoinColumn({name: 'paymentMethodId'})
   paymentMethod: PaymentMethod

   @Column({type:'int',default:1})
   isActive: number;

   @CreateDateColumn()
   created_at: Date; // Creation date

   @UpdateDateColumn()
   updated_at: Date; // Last updated date

   @DeleteDateColumn()
   deleted_at: Date; // Deletion date
}
