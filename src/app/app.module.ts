import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LineHorizontalComponent } from './visuals/line-horizontal/line-horizontal.component';
import { MenuComponent } from './common/menu/menu.component';
import { VisualNestComponent } from './visuals/visual-nest/visual-nest.component';
import { ContentNestComponent } from './content/content-nest/content-nest.component';
import { VisualEggComponent } from './visuals/visual-egg/visual-egg.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutNestComponent,
    LayoutContactComponent,
    LayoutFeetComponent,
    NavigationComponent,
    LineHorizontalComponent,
    MenuComponent,
    VisualNestComponent,
    ContentNestComponent,
    VisualEggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
