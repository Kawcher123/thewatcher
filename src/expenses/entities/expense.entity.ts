import { ExpenseCategory } from "src/expense_category/entities/expense_category.entity";
import { PaymentMethod } from "src/payment_methods/entities/payment_method.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'varchar'})
    name:string

    @Column({type:'int'})
    amount:number

    @Column({type:'int'})
    userId: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'userId'})
    user: User

    @Column({type:'int'})
    expenseCategoryId: number;

    @ManyToOne(() => ExpenseCategory)
    @JoinColumn({name: 'expenseCategoryId'})
    expenseCategory: ExpenseCategory


    @Column({type:'int'})
    paymentMethodId: number;

    @ManyToOne(() => PaymentMethod)
    @JoinColumn({name: 'paymentMethodId'})
    paymentMethod: PaymentMethod

    @Column({type:'int',default:1})
    isActive: number;

    @Column({type: 
        'timestamp', 
        nullable: false })
        
    created_at: string; // Creation date

    @Column({type: 
        'timestamp', 
        nullable: true })
    updated_at: string; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date

}