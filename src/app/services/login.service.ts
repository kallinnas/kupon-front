import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('email', email);
    httpHeaders = httpHeaders.append('password', password);

    return this.httpClient.post<any>(
      this.url + 'login',
      null,
      {headers: httpHeaders});
  }

  public registration(email: string, password: string, role: number): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('email', email);
    httpHeaders = httpHeaders.append('password', password);
    httpHeaders = httpHeaders.append('role', role.toString());

    return this.httpClient.post<any>(
      this.url + 'user/reg',
      null,
      {headers: httpHeaders});
  }

}
