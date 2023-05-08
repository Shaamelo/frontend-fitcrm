import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SendMessageComponent } from './components/send-message/send-message.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './components/customers/update-customer/update-customer.component';
import { DetailsCustomerComponent } from './components/customers/details-customer/details-customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CreateCustomerComponent },
  { path: 'customers/update/:id', component: UpdateCustomerComponent },
  { path: 'customers/details/:id', component: DetailsCustomerComponent },
  { path: 'crm', component: SendMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, HttpClientModule],
})
export class AppRoutingModule {}
