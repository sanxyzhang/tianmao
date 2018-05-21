import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { BottomNav1Component } from './bottom-nav1/bottom-nav1.component';
import { BottomNav2Component } from './bottom-nav2/bottom-nav2.component';
import { CategorywithcarouselComponent } from './categorywithcarousel/categorywithcarousel.component';
import { HomeProductComponent } from './home-product/home-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SearchNavComponent,
    BottomNav1Component,
    BottomNav2Component,
    CategorywithcarouselComponent,
    HomeProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
