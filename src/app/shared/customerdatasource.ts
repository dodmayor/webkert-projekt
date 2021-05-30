import { CollectionViewer } from "@angular/cdk/collections";
import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs";
import { Customer } from "./models/customer";

export class CustomersDataSource implements DataSource<Customer> {
  customers: Observable<Customer[]> = new Observable();

  connect(collectionViewer: CollectionViewer): Observable<Customer[] | readonly Customer[]> {
    return this.customers;
  }
  disconnect(collectionViewer: CollectionViewer): void {

  }

  setCustomers(customers: Observable<Customer[]>): void {
    this.customers = customers;
  }
}
