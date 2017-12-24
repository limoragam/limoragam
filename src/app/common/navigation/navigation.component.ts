import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineLite } from 'gsap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  menuItems = [
    {'menuItemState':'hidden', 'routerLink':'/', 'text':'The Nest'},
    {'menuItemState':'hidden', 'routerLink':'/contact', 'text':'Contact'},
    {'menuItemState':'hidden', 'routerLink':'/portfolio', 'text':'Portfolio'},
    {'menuItemState':'hidden', 'routerLink':'/feet', 'text':'See My Feet'},
    {'menuItemState':'hidden', 'routerLink':'/about_me', 'text':'About Me'},
    {'menuItemState':'hidden', 'routerLink':'/cv', 'text':'CV'},
  ];

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.setMenuItemsPotentialVisiblity();
  }

  setMenuItemsPotentialVisiblity() {
    let currentPath = "/";
    if(this.activatedRoute.snapshot.url.length > 0) {
      currentPath = currentPath + this.activatedRoute.snapshot.url[0].path;
    }
    this.menuItems.forEach((menuItem, i) => {
      if(menuItem.routerLink !== currentPath) {
        menuItem.menuItemState = 'visible';
      }
    });
  }

  showMenu() {
    new TimelineLite().staggerTo(".menu-item.visible", 0.6, {
      transform:'translateX(0)', 
      opacity:1, 
      'font-size':'1rem'
    }, 0.3);
  }
}
