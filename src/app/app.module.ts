import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './Services/main.service';


@NgModule({
  declarations: [
    AppComponent,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
