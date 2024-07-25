import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Account } from '../Modèles/account';
import { Services, /*ServicesAdapter*/ } from '../Modèles/services';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  URL = "http://api-area-a.fr/"
  postId!: any
  services: Services[] = []

  constructor(private http: HttpClient) {
   }

  
  getUserData(){
  let url="getUser"
  return this.http.get(this.URL+url);
}
  registerMethode(userN: string,LastN: string,email: string,Password: string) {
    return this.http.post<any>(this.URL+'register',{ first_name:userN, last_name:LastN, email:email, password:Password})
}

  loginMethode(userN: string,Password: string) {
    return this.http.post<any>(this.URL+'login',{ email:userN, password:Password})
  }

  forgotMethod(userN: string, password: string) {
    return this.http.post<any>(this.URL+'forgot',{ email:userN, password:password})
  }





  getServiceMethode(token: string | null): Observable<any>{
      const headers = { 'Authorization': 'Bearer '+token }
     return this.http.get<any>(this.URL+'getService', { headers })
 

  }
  getActionMethode(token: string | null, action_id: number): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
   return this.http.get<any>(this.URL+'getAction?id='+ action_id, { headers })

  }
  CreateAcrea(token: string | null, service_id_act: number, services_id_rea: number, id_action: number, id_reaction: number, params_action: string[], params_reaction: string[]): Observable<any>{
    const headers = { 'Authorization': 'Bearer '+token }
    return this.http.post<any>(this.URL+'createAcrea', { id_service_action:service_id_act, id_service_reaction:services_id_rea, id_action:id_action,  id_reaction:id_reaction, params_action:params_action, params_reaction:params_reaction }, {headers} )

  }

  getAcrea(token: string | null): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + token}
    return this.http.get<any>(this.URL+'getAcreaUser', { headers })
  }
}