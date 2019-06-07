import { Component, OnInit } from '@angular/core';
import { MenuDataService } from '../shared/providers/menu-data.service';
import { MenuDataElement } from '../shared/interfaces/menu-data-element';

@Component ({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [ './landing-page.component.scss' ]
})
export class LandingPageComponent implements OnInit {

  sections: MenuDataElement[];

  constructor (private menuDataService: MenuDataService) {

  }

  ngOnInit () {
    this.menuDataService.getAllMenuElements ().subscribe ((data) => {
      this.sections = data;
    });
  }

}
