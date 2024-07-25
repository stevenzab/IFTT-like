import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
// import { TwitterAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const API_URL = "http://api-area-a.fr/";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '';
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }
  login(loginData: any): Observable<any> {
    this.tokenService.removeToken();
    console.log(loginData.email);
    return this.http.post<any>(API_URL + 'login', {email: loginData.email, password: loginData.password})
      .pipe(
        tap(res => {
          this.tokenService.saveToken(res['ID Token']);
          console.log(res['ID Token'])
        }),
        catchError(AuthService.handleError)
      );
  }

  loginGoogle(loginData: any, token: any) : Observable<any> {
    this.tokenService.removeToken();
    var name = loginData.getName().split(' ');
    var client = [loginData.getId(), name[0], name[1], token]
    return this.http.post<any>(API_URL + 'createTokenUser', client)
    .pipe(
      tap(res => {
        this.tokenService.saveToken(res['ID Token']);
      }),
      catchError(AuthService.handleError)
    );
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'register', { first_name:data.user, last_name:data.Last, email:data.email, password:data.Password})
      .pipe(
        tap(res => {
          AuthService.log('register')
          console.log(res['ID Token']);
          this.tokenService.saveToken(res['ID Token']);
        }),
        catchError(AuthService.handleError)
      );
  }

  registerGoogle(registerData: any, token: any, service: string) : Observable<any> {
    this.tokenService.removeToken();
    var name = registerData.getName().split(' ');
    var first = name[0]
    var second = name[1]
    console.log(token)
    return this.http.post<any>(API_URL + 'createTokenUser', {token_service : token, email: registerData.getEmail(), first_name: first, last_name: second, service_name: service})
    .pipe(
      tap(res => {
        this.tokenService.saveToken(res['ID Token']);
      }),
      catchError(AuthService.handleError)
    );
  }

  // TwitterAuth() {
  //   return this.AuthLogin(new TwitterAuthProvider());
  // }
  // // Auth logic to run auth providers
  // AuthLogin(provider: any) {
  //   return this.afAuth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       console.log(JSON.parse(JSON.stringify(result.user)).stsTokenManager.accessToken);
  //       console.log(result.user?.email);
  //       console.log('You have been successfully logged in!');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  //   googleAuth() {
  //     return this.AuthLogin(new GoogleAuthProvider())
  //   }
  // facebookAuth() {
  //   return this.AuthLogin(new FacebookAuthProvider())
  // }
}
