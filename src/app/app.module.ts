import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/header/header.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

import { ContainComponent } from './container/contain/contain.component';
import { LoreComponent } from './view/lore/lore.component';
import { NftExplicationComponent } from './view/nft-explication/nft-explication.component';
import { AboutUsComponent } from './view/about-us/about-us.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainComponent,
    LoreComponent,
    NftExplicationComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
