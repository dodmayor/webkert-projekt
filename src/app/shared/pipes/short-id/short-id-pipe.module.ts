import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortIdPipe } from './short-id.pipe';

@NgModule({
  declarations: [ShortIdPipe],
  imports: [
    CommonModule
  ],
  exports: [ShortIdPipe]
})
export class ShortIdPipeModule { }
