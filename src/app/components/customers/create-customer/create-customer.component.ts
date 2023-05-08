import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.sass'],
})
export class CreateCustomerComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customersService: CustomerService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      remainingDays: ['', Validators.required],
      emergencyName: ['', Validators.required],
      emergencyEmail: ['', Validators.required],
      emergencyPhone: ['', Validators.required],
      emergencyRelationship: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      gender: ['', Validators.required],
      diseases: ['', Validators.required],
    });
  }
  createCustomer() {
    console.log(this.form);
    const customer: Customer = {
      name: this.form.get('name')?.value,
      documentType: this.form.get('documentType')?.value,
      documentNumber: this.form.get('documentNumber')?.value,
      birthDate: this.form.get('birthDate')?.value,
      address: this.form.get('address')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      remainingDays: this.form.get('remainingDays')?.value,
      emergencyContact: {
        name: this.form.get('emergencyName')?.value,
        email: this.form.get('emergencyEmail')?.value,
        phone: this.form.get('emergencyPhone')?.value,
        relationship: this.form.get('emergencyRelationship')?.value,
      },
      medicInformation: {
        weight: this.form.get('weight')?.value,
        height: this.form.get('height')?.value,
        gender: this.form.get('gender')?.value,
        diseases: this.form.get('diseases')?.value,
      },
    };
  }
}
