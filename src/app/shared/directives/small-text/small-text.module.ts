import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallTextDirective } from './small-text.directive';

@NgModule({
  declarations: [SmallTextDirective],
  imports: [
    CommonModule
  ],
  exports: [SmallTextDirective]
})
export class SmallTextModule { }
