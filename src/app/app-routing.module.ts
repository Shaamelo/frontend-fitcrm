import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { SendMessageComponent } from './components/send-message/send-message.component';

const routes: Routes = [
  {path:"customers", component: CustomersComponent},
  {path:"crm", component: SendMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
