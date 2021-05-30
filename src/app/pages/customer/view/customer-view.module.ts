import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view.component';
import { MatCardModule } from '@angular/material/card';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';
import { DeleteDialogModule } from 'src/app/shared/dialogs/delete-dialog/delete-dialog.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [CustomerViewComponent],
  imports: [
    CommonModule, MatCardModule, OnHoverModule, MatButtonModule, DeleteDialogModule, RouterModule, MatListModule, MatDividerModule
  ],
  exports: [CustomerViewComponent]
})
export class CustomerViewModule { }
