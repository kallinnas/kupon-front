import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/company';
import {Coupon} from '../models/coupon';
import {Customer} from '../models/customer';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = environment.baseUrl;
  private token = localStorage.getItem('token');
  private header: HttpHeaders = new HttpHeaders().append('token', this.token);

  public constructor(private httpClient: HttpClient) {
  }

  /* CUSTOMER */
  public getCustomersAccountRest(): Observable<Customer> {
    return this.httpClient.post<Customer>(
      this.url + 'customer/account',
      null,
      {headers: this.header, responseType: 'json'});
  }

  /* COMPANY */
  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url + 'customer/' + this.token + '/getCompanyById/' + id,
      {withCredentials: false});
  }


  /* COUPON */
  public getAllCompanyCoupons(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'customer/' + this.token + '/companyCoupons/' + id,
      {withCredentials: false});
  }

  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'customer/' + this.token + '/getAllCoupons',
      {responseType: 'json'});
  }

  public removeFromCart(id: number): Observable<any> {
    return this.httpClient.put<any>(
      this.url + 'customer/' + this.token + '/removeFromCart/' + id,
      {responseType: 'json'});
  }

  public buyCouponRest(id: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(
      this.url + 'customer/' + this.token + '/buyCoupon/' + id,
      {responseType: 'json'});
  }




  public deleteCustomerRest(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(
      this.url + 'customer/' + this.token + '/deleteCustomerById/' + id,
      {responseType: 'json'});
  }

  public updateCustomerRest(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(
      this.url + 'customer/' + this.token + '/update', customer,
      {responseType: 'json'});
  }


}
