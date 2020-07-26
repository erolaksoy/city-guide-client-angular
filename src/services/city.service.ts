import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { City } from 'src/models/city.model';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  path: string = "https://localhost:44398/api";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "/cities");
  }

  

}