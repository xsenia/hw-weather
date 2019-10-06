import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PlacesComponent } from './places/places.component';
import { MenuPipe } from './places/menu.pipe';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    MenuPipe,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
