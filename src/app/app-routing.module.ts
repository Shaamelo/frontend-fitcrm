import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SendMessageComponent } from './components/send-message/send-message.component';

const routes: Routes = [
  {path:"customers", component: CustomersComponent},
  {path:"customers/create", component: CreateCustomerComponent},
  {path:"crm", component: SendMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
