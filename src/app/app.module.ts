import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputTelComponent } from './input-tel/input-tel.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputNumberComponent,
    InputEmailComponent,
    InputButtonComponent,
    InputTelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
