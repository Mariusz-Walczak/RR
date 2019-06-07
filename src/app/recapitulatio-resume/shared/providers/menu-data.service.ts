import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuDataElement } from '../interfaces/menu-data-element';

@Injectable ({
  providedIn: 'root'
})

export class MenuDataService {

  constructor (private http: HttpClient) {
  }

  getAllMenuElements(): Observable<MenuDataElement[]> {
    const response = this.http.get<MenuDataElement[]>('http://localhost:8000/api/menu_elements');
    return response;
  }
}
