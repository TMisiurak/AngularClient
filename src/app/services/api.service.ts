import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get<any>(this.apiUrl + url, { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})});
  }

  // Put is used both for POST and PUT actions
  post(url: string, body: any) {
    return this.http.post<any>(this.apiUrl + url, JSON.stringify(body), httpOptions);
  }

  put(url: string, body: any) {
    return this.http.put<any>(this.apiUrl + url, JSON.stringify(body), httpOptions);
  }

  delete(url: string) {
    return this.http.delete<any>(this.apiUrl + url, httpOptions);
  }
}
