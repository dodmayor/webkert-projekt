import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {
  customersCollection: string = 'customers';

  constructor(private afs: AngularFirestore) { }

  getCustomers(): Observable<Customer[]> {
    return this.afs.collection(this.customersCollection, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('id', 'asc');
      return query;
    }).valueChanges() as Observable<Customer[]>;
  }

  async addCustomer(data: Customer): Promise<string> {
    data.id = this.afs.createId();
    data.href = "http://localhost:4200/customer/view/" + data.id;
    await this.afs.collection(this.customersCollection).doc(data.id).set(data);
    return data.id;
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.afs.collection(this.customersCollection).doc(id).valueChanges() as Observable<Customer>;
  }

  updateCustomer(id: string, data: Customer) {
    return this.afs.collection(this.customersCollection).doc(id).update(data);
  }

  deleteCustomer(id: string) {
    return this.afs.collection(this.customersCollection).doc(id).delete();
  }
}
