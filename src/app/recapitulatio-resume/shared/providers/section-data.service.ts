import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResponse } from '../interfaces/data-response';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class SectionDataService {
  private baseUrl = 'http://localhost:8000/api/category_data/';

  constructor (private http: HttpClient) {
  }

  getData(name: string): Observable<DataResponse> {
    const url = this.getUrl(name);
    const response = this.http.get<DataResponse>(url);
    return response;
  }

  private getUrl (name: string): string {
    const newUrl = `${this.baseUrl}${name}`;
    return newUrl;

  }

}
