import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShortIdPipeModule } from 'src/app/shared/pipes/short-id/short-id-pipe.module';



@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule, RouterModule, MatTableModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatTooltipModule, MatSortModule, MatPaginatorModule, ShortIdPipeModule
  ],
  exports: [CustomerListComponent]
})
export class CustomerListModule { }
