import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add.component';
import { RouterModule } from '@angular/router';
import { CustomerFormCardModule } from 'src/app/shared/cards/customer-form-card/customer-form-card.module';


@NgModule({
  declarations: [CustomerAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomerFormCardModule
  ],
  exports: [CustomerAddComponent]
})
export class CustomerAddModule { }
