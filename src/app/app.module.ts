import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HotelsTabsComponent } from './hotels-tabs/hotels-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsTabsComponent
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
