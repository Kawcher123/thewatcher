import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from './services/services.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { Role } from './roles/entities/role.entity';
import { Service } from './services/entities/service.entity';
import { Permission } from './permissions/entities/permission.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ExpenseCategoryModule } from './expense_category/expense_category.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PaymentMethodsModule } from './payment_methods/payment_methods.module';
import { EmergencyContactsModule } from './emergency_contacts/emergency_contacts.module';
import { MyContactsModule } from './my_contacts/my_contacts.module';
import { BeneficiaryContactsModule } from './beneficiary_contacts/beneficiary_contacts.module';
import { MyLoansModule } from './my_loans/my_loans.module';
import { ExpenseCategory } from './expense_category/entities/expense_category.entity';
import { Expense } from './expenses/entities/expense.entity';
import { BeneficiaryContact } from './beneficiary_contacts/entities/beneficiary_contact.entity';
import { PaymentMethod } from './payment_methods/entities/payment_method.entity';
import { MyContact } from './my_contacts/entities/my_contact.entity';
import { MyLoan } from './my_loans/entities/my_loan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'thewatcher',
      entities: [Role,Service,Permission,User,ExpenseCategory,Expense,BeneficiaryContact,PaymentMethod,MyContact,MyLoan],
      synchronize: true,
    }),
    ServicesModule,
    RolesModule,
    PermissionsModule,
    UsersModule,
    AuthModule,
    ProfileModule,
    ExpenseCategoryModule,
    ExpensesModule,
    PaymentMethodsModule,
    EmergencyContactsModule,
    MyContactsModule,
    BeneficiaryContactsModule,
    MyLoansModule,
  ],

})
export class AppModule {}
