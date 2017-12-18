import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutNestComponent,
    LayoutContactComponent,
    LayoutFeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
