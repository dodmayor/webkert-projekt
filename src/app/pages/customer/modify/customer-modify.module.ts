import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModifyComponent } from './customer-modify.component';
import { CustomerFormCardModule } from 'src/app/shared/cards/customer-form-card/customer-form-card.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerModifyComponent
  ],
  imports: [
    CommonModule, CustomerFormCardModule, RouterModule
  ],
  exports: [CustomerModifyComponent]
})
export class CustomerModifyModule { }
