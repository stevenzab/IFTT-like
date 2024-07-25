import { EventEmitter, Injectable } from '@angular/core';

const ACCESS_TOKEN = "access_token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  myToken: EventEmitter<any> = new EventEmitter();
  token : any;
  constructor() { }
  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN) as string;
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

}
