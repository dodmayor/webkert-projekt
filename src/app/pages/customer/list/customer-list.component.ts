import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Customer } from '../../../shared/models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  // customersDataSource = new CustomersDataSource();
  customersDataSource = new MatTableDataSource<Customer>();
  displayedColumns = ['id', 'name'];

  listSubscription: Subscription | null = null;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(private service: FbBaseService) {
  }

  ngOnInit(): void {
    this.customersDataSource.paginator = this.paginator;
    this.customersDataSource.sort = this.sort;

    this.getCustomers();
  }

  getCustomers(): void {
    this.service.getCustomers().subscribe(val => {
      this.customersDataSource.data = val;
    });
  }

  ngOnDestroy() {
    this?.listSubscription?.unsubscribe();
  }
}
