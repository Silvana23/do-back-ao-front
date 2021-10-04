import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { HomeComponent } from './home/home.component';
import { IncluirComponent } from './inclui-usuario/inclui-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaUsuarioComponent,
    IncluirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
