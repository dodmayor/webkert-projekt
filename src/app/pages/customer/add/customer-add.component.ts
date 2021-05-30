import { Component, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  status: 'success' | 'error' | 'none' = 'none';
  error: string = '';
  customerId: string = '';


  constructor(private service: FbBaseService) {
  }

  ngOnInit(): void {
  }

  addCustomer(customer: Customer): void {
    this.service.addCustomer(customer)
      .then(value => {
        this.status = 'success';
        this.customerId = value;
      })
      .catch(reason => {
        this.status = 'error';
        this.error = reason;
      })
  }
}
