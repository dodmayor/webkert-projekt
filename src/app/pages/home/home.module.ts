import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, NavbarModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
