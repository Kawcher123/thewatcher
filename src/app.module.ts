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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'thewatcher',
      entities: [Role,Service,Permission,User],
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