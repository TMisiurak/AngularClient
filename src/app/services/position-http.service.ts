import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

const url = 'api/positions/';

@Injectable({
  providedIn: 'root'
})
export class PositionHttpService {

  constructor(private http: ApiService) { }

  getPositions(): Observable<any> {
    return this.http.get(url);
  }

  getPosition(id: number): Observable<any> {
    return this.http.get(url + id);
  }

  create(position: any): Observable<any> {
    return this.http.post(url, position);
  }

  update(position: any): Observable<any> {
    return this.http.put(url, position);
  }

  delete(id: number) {
    return this.http.delete(url + id);
  }
}
