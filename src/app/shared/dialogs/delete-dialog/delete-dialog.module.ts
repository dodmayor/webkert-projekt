import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { OnHoverModule } from '../../directives/on-hover/on-hover.module';
import { DeleteDialogComponent } from './delete-dialog.component';



@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, MatDividerModule, OnHoverModule
  ],
  exports: [DeleteDialogComponent]
})
export class DeleteDialogModule { }
