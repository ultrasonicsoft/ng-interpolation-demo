import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1.component';

@NgModule({
  declarations: [Child1Component],
  exports: [Child1Component],
  imports: [
    CommonModule
  ]
})
export class Child1Module { }
