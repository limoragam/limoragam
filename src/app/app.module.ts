import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';
import { ContentNestComponent } from './content/content-nest/content-nest.component';
import { ContentFeetComponent } from './content/content-feet/content-feet.component';
import { ContentContactComponent } from './content/content-contact/content-contact.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LineHorizontalComponent } from './visuals/line-horizontal/line-horizontal.component';
import { VisualNestComponent } from './visuals/visual-nest/visual-nest.component';
import { VisualEggComponent } from './visuals/visual-egg/visual-egg.component';
import { VisualFeetComponent } from './visuals/visual-feet/visual-feet.component';
import { VisualSquawkComponent } from './visuals/visual-squawk/visual-squawk.component';

import { ValidatorTextareaDirective } from './content/content-contact/validator-textarea.directive';
import { SafeUrlPipe } from './common/safe-url.pipe';

// pending cleanup
import { MenuComponent } from './common/menu/menu.component';
import { ValidatorContactDirective } from './content/content-contact/validator-contact.directive';

@NgModule({
  declarations: [
    AppComponent,
    LayoutNestComponent,
    LayoutContactComponent,
    LayoutFeetComponent,
    ContentNestComponent,
    ContentFeetComponent,
    ContentContactComponent,
    NavigationComponent,
    LineHorizontalComponent,
    VisualNestComponent,
    VisualEggComponent,
    VisualFeetComponent,
    VisualSquawkComponent,
    MenuComponent,
    ValidatorContactDirective,  // pending cleanup
    ValidatorTextareaDirective,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
