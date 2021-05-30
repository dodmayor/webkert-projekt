import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from '../../dialogs/address-dialog/address-dialog.component';
import { ContactMedium, Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-form-card',
  templateUrl: './customer-form-card.component.html',
  styleUrls: ['./customer-form-card.component.scss']
})
export class CustomerFormCardComponent implements OnInit, OnChanges {
  customerForm: FormGroup;

  customer: Customer = {
    id: '',
    name: '',
    contactMedium: [],
    status: 'pending'
  };

  contactMediumArray: ContactMedium[] = [];

  statusOptions: string[] = ['pending', 'accepted', 'rejected'];

  @Input() modifying: boolean = false;
  @Input('customer') inCustomer: Customer | null = null;
  @Output() onCustomerSubmit = new EventEmitter<Customer>();


  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      id: [null],
      href: [null],
      name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      status: [null, Validators.pattern('pending|accepted|rejected')],
      statusReason: [null, Validators.minLength(3)],
      validFor: this.fb.group({
        startDateTime: [null],
        endDateTime: [null]
      })

    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // on @Input() change
    if (this.inCustomer !== null) {
      this.customer = this.inCustomer;
      this.contactMediumArray = this.inCustomer.contactMedium;
      this.customerForm.patchValue(this.customer as Customer);
    }
  }

  submitCustomer(): void {
    this.customer = this.customerForm.value as Customer;
    // this.customer.validFor!.startDateTime = ((this.customer.validFor?.startDateTime as any) as Date)?.toISOString();
    // this.customer.validFor!.endDateTime = ((this.customer.validFor?.endDateTime as any) as Date)?.toISOString();

    this.customer.contactMedium = this.contactMediumArray;
    this.onCustomerSubmit.emit(this.customer);
  }

  addAddress(): void {
    let dialogRef = this.dialog.open(AddressDialogComponent, {
      height: '75vh',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.contactMediumArray.push(result);
      }
    });
  }

  editAddress(address: any): void {
    const i = this.contactMediumArray.indexOf(address, 0);

    if (i > -1) {
      let dialogRef = this.dialog.open(AddressDialogComponent, {
        height: '75vh',
        width: '600px',
        data: {
          contactMedium: address
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.contactMediumArray[i] = result;
        }
      });
    }
  }

  removeAddress(address: ContactMedium): void {
    const i = this.contactMediumArray.indexOf(address, 0);
    if (i > -1) {
      this.contactMediumArray.splice(i, 1);
    }
  }

}
