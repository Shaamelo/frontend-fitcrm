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
      this.customersService.getCustomerInfo(this.id).subscribe(data => {
        this.customerName = data.name;

        this.form.setValue({
          name: data.name,
          documentType: data.documentType,
          documentNumber: data.documentNumber,
          birthDate: data.birthDate.slice(0, 10),
          address: data.address,
          email: data.email,
          phone: data.phone,
          remainingDays: data.remainingDays,
          emergencyName: data.emergencyContact.name,
          emergencyEmail: data.emergencyContact.email,
          emergencyPhone: data.emergencyContact.phone,
          emergencyRelationship: data.emergencyContact.relationship,
          weight: data.medicInformation.weight,
          height: data.medicInformation.height,
          gender: data.medicInformation.gender,
          diseases: data.medicInformation.diseases ? data.medicInformation.diseases[0] : "",
        });
      })

    }
  }

  updateCustomer() {
    if (this.id !== null) {
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
      this.customersService.updateCustomer(this.id, customer).subscribe(data => {
        alert('Usuario actualizado con exito');
        console.log(data);
      })
    }
  }
}
