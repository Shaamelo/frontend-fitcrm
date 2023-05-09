import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/types/Customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.sass'],
})
export class UpdateCustomerComponent implements OnInit {
  id: string | null;
  form: FormGroup;
  customerName: string = '';

  constructor(
    private fb: FormBuilder,
    private customersService: CustomerService,
    private aRoute: ActivatedRoute
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
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
  ngOnInit(): void {
    this.getCustomerInfo();
  }
  getCustomerInfo() {
    if (this.id !== null) {
      const customerInfo = this.customersService.getCustomerInfo(this.id);
      this.customerName = customerInfo.name;

      this.form.setValue({
        name: customerInfo.name,
        documentType: customerInfo.documentType,
        documentNumber: customerInfo.documentNumber,
        birthDate: customerInfo.birthDate.slice(0, 10),
        address: customerInfo.address,
        email: customerInfo.email,
        phone: customerInfo.phone,
        remainingDays: customerInfo.remainingDays,
        emergencyName: customerInfo.emergencyContact.name,
        emergencyEmail: customerInfo.emergencyContact.email,
        emergencyPhone: customerInfo.emergencyContact.phone,
        emergencyRelationship: customerInfo.emergencyContact.relationship,
        weight: customerInfo.medicInformation.weight,
        height: customerInfo.medicInformation.height,
        gender: customerInfo.medicInformation.gender,
        diseases: customerInfo.medicInformation.diseases,
      });
    }
  }

  updateCustomer() {
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
        diseases: [this.form.get('diseases')?.value],
      },
    };
    alert('wuu usuario actualizado');
    console.log(customer);
    this.form.reset();
  }
}
