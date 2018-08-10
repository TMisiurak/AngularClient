import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  private url = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getUserData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8'
      })
    };
    return this.http.get<User[]>(this.url, httpOptions).pipe();
  }
}
