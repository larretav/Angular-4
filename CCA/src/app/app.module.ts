import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { RegUsuarioComponent } from './reg-usuario/reg-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    RegUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
