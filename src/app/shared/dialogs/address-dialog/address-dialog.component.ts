import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactMedium, MediumCharacteristic } from '../../models/customer';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.scss']
})
export class AddressDialogComponent implements OnInit {
  addressForm: FormGroup;

  editing: boolean = false;
  preferred: boolean = false;

  contactTypes = ['mobile', 'fixed home', 'fixed office'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddressDialogComponent>, private fb: FormBuilder) {
    this.addressForm = fb.group({
      city: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      contactType: [null, Validators.pattern('mobile|fixed home|fixed office')],
      country: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      emailAddress: [null, Validators.email],
      faxNumber: [null],
      phoneNumber: [null],
      postCode: [null],
      stateOrProvince: [null, Validators.compose([Validators.minLength(3)])],
      street1: [null, Validators.compose([Validators.minLength(3)])],
      street2: [null, Validators.compose([Validators.minLength(3)])],
    });

    if (data !== null) {
      const contactMedium = data.contactMedium as ContactMedium;
      this.preferred = contactMedium.preferred!;
      console.log(contactMedium);

      this.addressForm.patchValue(contactMedium.characteristic as MediumCharacteristic);
      this.editing = true;
    }
  }

  setPreferred(preferred: boolean): void {
    this.preferred = preferred;
  }

  ngOnInit(): void {
  }

  submitAddress(): void {
    const contactMedium: ContactMedium = {
      characteristic: this.addressForm.value as MediumCharacteristic,
      preferred: this.preferred
    }

    this.dialogRef.close(contactMedium);
  }
}
