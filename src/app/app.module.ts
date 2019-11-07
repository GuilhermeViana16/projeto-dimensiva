import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { routes } from './app-routing.module'
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcasService } from './marcas/marcas.service';
import { SlideComponent } from './slide/slide.component';
import { MarcaComponent } from './marcas/marca/marca.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';
import { CarroComponent } from './marca-detail/carro/carro.component';
import { CarroItemComponent } from './marca-detail/carro-item/carro-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MarcasComponent,
    SlideComponent,
    MarcaComponent,
    MarcaDetailComponent,
    CarroComponent,
    CarroItemComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
