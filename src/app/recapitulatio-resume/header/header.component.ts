import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../shared/providers/menu-data.service';
import { MenuDataElement } from '../shared/interfaces/menu-data-element';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  menuData: MenuDataElement[];

  constructor (private menuDataService: MenuDataService) {
  }

  ngOnInit () {
    this.menuDataService.getAllMenuElements ().subscribe ((data) => {
      this.menuData = data;
    });
  }

  scrollToElement (elementId): void {
    const element = document.getElementById (elementId);
    if (element !== null) {
      element.scrollIntoView ({ behavior: 'smooth' });

    }
  }

}
