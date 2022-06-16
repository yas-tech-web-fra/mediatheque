import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Design Card

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FooterComponent } from './_commons/footer/footer.component';
import { NavBarComponent } from './_commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './_commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponentComponent } from './pages/product-page/product-list-component/product-list-component.component';
import { ProductCardComponentComponent } from './pages/product-page/product-list-component/product-card-component/product-card-component.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ProductDetailComponent } from './pages/details-page/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductListComponentComponent,
    ProductCardComponentComponent,
    DetailsPageComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
