import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LineHorizontalComponent } from './visuals/line-horizontal/line-horizontal.component';
import { MenuComponent } from './common/menu/menu.component';
import { VisualNestComponent } from './visuals/visual-nest/visual-nest.component';
import { ContentNestComponent } from './content/content-nest/content-nest.component';


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
    ContentNestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
