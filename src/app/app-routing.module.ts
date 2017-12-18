import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutNestComponent } from './layout/layout-nest/layout-nest.component';
import { LayoutContactComponent } from './layout/layout-contact/layout-contact.component';
import { LayoutFeetComponent } from './layout/layout-feet/layout-feet.component';

const appRoutes:Routes = [
  { 
    path:'', 
    component:LayoutNestComponent, 
    pathMatch:'full' 
  },
  { 
    path:'contact', 
    component:LayoutContactComponent, 
    pathMatch:'full'
  },
  { 
    path:'feet', 
    component:LayoutFeetComponent, 
    pathMatch:'full'
  },
  // {path:'not-found', component:ErrorPageComponent, data:{message:'Error Message: Page not Found'}},
  // {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
