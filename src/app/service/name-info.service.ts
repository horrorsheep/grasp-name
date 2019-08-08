import { Injectable } from '@angular/core';
import { Genderizing } from './genderize';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameInfoService {
  nameinfoUrl = "https://api.genderize.io/?name=";  
  constructor(private http: HttpClient) {  }
  getNameInfo(name:string):Observable<Genderizing> {
    return this.http.get<Genderizing>(this.nameinfoUrl.concat(name));
  }
}
