import { Injectable } from '@angular/core';
import { Genderizing } from './genderize';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameInfoService {
  nameinfoUrl = "https://api.genderize.io/?name=";
  names: string[] = [];
  nameinfos: Genderizing[] = [];
  
  constructor(private http: HttpClient) {  }
  getOneName(name:string):Observable<Genderizing> {
    return this.http.get<Genderizing>(this.nameinfoUrl.concat(name));
  }

  UpdateNameInfo() {
    this.nameinfos = [];
    for (let name of this.names) {
      this.getOneName(name).subscribe(info => this.nameinfos.push(info));
    }
  }
}
