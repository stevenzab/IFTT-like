import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';

const API_URL = "http://api-area-a.fr/";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  myParams = new HttpParams();
  constructor(private http: HttpClient) { }

  public getUser(token: string | null): any {
    const headers = {"Authorization": "Bearer " + token}
    return this.http.get(API_URL + 'getUser', {headers})
  }

  deleteUser(token: string) {
    const headers = {"Authorization": "Bearer " + token}
    return this.http.delete(API_URL+ 'deleteUser', {headers})
  }
}