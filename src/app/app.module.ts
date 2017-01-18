import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoinEntryForm } from './coinEntryForm/coinEntryForm.component';
import { CoinDisplay } from './coinDisplay/coinDisplay.component';
import { QuantityEntryForm } from './quantityEntryForm/quantityEntryForm.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinEntryForm,
    CoinDisplay,
    QuantityEntryForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
