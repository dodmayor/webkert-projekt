import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { DeleteDialogComponent } from 'src/app/shared/dialogs/delete-dialog/delete-dialog.component';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  customerId: string = '';
  customer: Customer | null = null;
  deleted: boolean = false;


  constructor(private route: ActivatedRoute, private service: FbBaseService, private dialog: MatDialog) {
    const routeParams = this.route.snapshot.paramMap;
    this.customerId = routeParams.get('customerId')!;
    console.log("CustomerViewComponent constructor");
  }

  ngOnInit(): void {
    this.service.getCustomerById(this.customerId).subscribe((result: Customer) => {
      this.customer = result;
    });

  }

  deleteCustomer(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleted = true;
        this.service.deleteCustomer(this.customerId);
      }
    })
  }
}
