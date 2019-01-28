import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Module } from './child1/child1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Child1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
