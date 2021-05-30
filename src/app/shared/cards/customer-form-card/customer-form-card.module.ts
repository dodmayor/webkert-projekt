import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AddressDialogModule } from '../../dialogs/address-dialog/address-dialog.module';
import { OnHoverModule } from '../../directives/on-hover/on-hover.module';
import { SmallTextModule } from '../../directives/small-text/small-text.module';
import { CustomerFormCardComponent } from './customer-form-card.component';



@NgModule({
  declarations: [
    CustomerFormCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    AddressDialogModule,
    MatListModule,
    MatIconModule,
    OnHoverModule,
    SmallTextModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule
  ],
  exports: [CustomerFormCardComponent]
})
export class CustomerFormCardModule { }
