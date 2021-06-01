import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SoundBarComponent } from './sound-bar/sound-bar.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSearchComponent } from './home-search/home-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SoundBarComponent,
    HomeViewComponent,
    HomePageComponent,
    HomeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
