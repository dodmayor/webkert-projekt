import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-modify',
  templateUrl: './customer-modify.component.html',
  styleUrls: ['./customer-modify.component.scss']
})
export class CustomerModifyComponent implements OnInit {
  status: 'success' | 'error' | 'none' = 'none';
  error: string = '';
  customerId: string = '';

  customer: Customer | null = null;
  deleted: boolean = false;


  constructor(private route: ActivatedRoute, private service: FbBaseService) {
    const routeParams = this.route.snapshot.paramMap;
    this.customerId = routeParams.get('customerId')!;
  }

  ngOnInit(): void {
    this.service.getCustomerById(this.customerId!).subscribe((result: Customer) => {
      this.customer = result;
    });
  }

  modifyCustomer(customer: Customer): void {
    this.service.updateCustomer(this.customerId, customer)
      .then(() => {
        this.status = 'success';
      })
      .catch(reason => {
        this.status = 'error';
        this.error = reason;
      })
  }
}
