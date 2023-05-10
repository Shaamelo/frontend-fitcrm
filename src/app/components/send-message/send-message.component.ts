import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { MessagingService } from 'src/app/services/messaging.service';
import { Customer } from 'src/app/types/Customer';
import { Email } from 'src/app/types/Email';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.sass'],
})
export class SendMessageComponent implements OnInit {
  form: FormGroup;
  customers: Customer[] = [];
  constructor(
    private fb: FormBuilder,
    private customersService: CustomerService,
    private messaginService: MessagingService
  ) {
    this.form = this.fb.group({
      target: ['', Validators.required],
      title: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getCustomers();
  }
  sendMessage() {
    alert('Mensaje enviado con exito');
    const email: Email = {
      address: this.form.get('target')?.value,
      subject: this.form.get('title')?.value,
      body: this.form.get('message')?.value,
    };
    this.messaginService.sendEmail(email).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => {
        console.log(e);
        this.form.reset();
      }
    );
  }
  getCustomers(): void {
    this.customersService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
