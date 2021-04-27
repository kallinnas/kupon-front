import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../models/company';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Coupon} from '../models/coupon';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;

  constructor(private client: HttpClient) {
  }

  getAllCompaniesRest(): Observable<Company[]> {
    return this.client.get<Company[]>(
      this.url + 'user/companies',
      {responseType: 'json'});
  }

  getAllCouponsRest() {
    return this.client.get<Coupon[]>(
      this.url + 'kupons',
      {responseType: 'json'});
  }


}
