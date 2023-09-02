import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './view/notfound/notfound.component';
import { HomeComponent } from './view/home/home.component';
import { authentificationGuard } from './guard/authentification.guard';
import { LoreComponent } from './view/lore/lore.component';
import { NftExplicationComponent } from './view/nft-explication/nft-explication.component';
import { AboutUsComponent } from './view/about-us/about-us.component';


const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authentificationGuard]},

  { path: 'histoire', component: LoreComponent },
  { path: 'nft-explication', component: NftExplicationComponent },
  { path: 'qui-suis-je', component: AboutUsComponent },

  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
