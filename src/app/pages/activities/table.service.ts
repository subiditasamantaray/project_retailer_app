import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  // private baseURL = 'http://localhost:3000/posts';

  constructor(
    private http: HttpClient
  ) { }


  getData(){
    return this.http.get<any>("http://localhost:3000/posts");
    // this.http.get<any>("http://localhost:3000/users")
  }
}
