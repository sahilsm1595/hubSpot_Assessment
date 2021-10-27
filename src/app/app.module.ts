import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './Services/main.service';
import { FormsModule } from '@angular/forms';
import { Exercise1Component } from './exercise1/exercise1.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, Exercise2Component, Exercise1Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, SharedModule],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
