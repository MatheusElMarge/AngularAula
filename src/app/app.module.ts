import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './app/layout/index/index.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
