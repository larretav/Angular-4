import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AlertModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegproductosComponent } from './regproductos/regproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegproductosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
