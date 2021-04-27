import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {Observable} from 'rxjs';
import {Coupon} from '../models/coupon';
import {Customer} from '../models/customer';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = environment.baseUrl;
  private token: string = localStorage.getItem('token');
  private header: HttpHeaders = new HttpHeaders().append('token', this.token);

  public constructor(private httpClient: HttpClient) {
  }

  // UPDATE'S
  public updateCompanyRest(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(
      this.url + 'admin/' + this.token + '/updateCompany', company,
      {withCredentials: false});
  }

  public updateCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(
      this.url + 'admin/updateCoupon', coupon,
      {headers: this.header, responseType: 'json'});
  }

  public updateCustomerRest(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(
      this.url + 'admin/' + this.token + '/updateCustomer', customer,
      {withCredentials: false});
  }

  // DELETE'S
  public deleteCompany(id: number): Observable<Company[]> {
    return this.httpClient.delete<Company[]>(
      this.url + 'admin/deleteCompanyById/' + id,
      {headers: this.header, responseType: 'json'});
  }

  public deleteCouponRest(id: number): Observable<Coupon[]> {
    return this.httpClient.delete<Coupon[]>(
      this.url + 'admin/deleteCoupon/' + id,
      {headers: this.header, responseType: 'json'});
  }

  public deleteCustomersCouponRest(customerId: number, couponId: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.url + 'admin/' + this.token + '/deleteCustomersCoupon/' + customerId + '/' + couponId,
      {withCredentials: false});
  }

  public deleteCustomerRest(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.url + 'admin/' + this.token + '/deleteCustomerById/' + id,
      {withCredentials: false});
  }


  // GETTER'S FOR COUPON
  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(
      this.url + 'admin/coupons',
      null,
      {headers: this.header, responseType: 'json'});
  }

  public getCompanyCouponsRest(id: number): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(
      this.url + 'admin/' + this.token + '/getCompanyCoupons/' + id,
      {withCredentials: false});
  }

  public getCustomerCouponsRest(id: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'admin/' + this.token + '/getCustomerCoupons/' + id,
      {withCredentials: false});
  }

  // GETTER'S FOR COMPANY
  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url + 'admin/' + this.token + '/getCompanyById/' + id,
      {withCredentials: false});
  }

  // public getAllCompaniesRest(): Observable<Company[]> {
  //   return this.cliehttpClientt.get<Company[]>(
  //     this.url + 'admin/' + this.token + '/companies',
  //     {withCredentials: false});
  // }

  // GETTER'S FOR CUSTOMER
  public getAllCustomersRest(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(
      this.url + 'admin/' + this.token + '/getAllCustomers',
      {withCredentials: false});
  }

  public getCustomerByIdRest(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      this.url + 'admin/' + this.token + '/getCustomerById/' + id,
      {withCredentials: false});
  }

  /* COUPON */
  public getCouponRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(
      this.url + 'admin/getCoupon/' + id,
      {headers: this.header, responseType: 'json'});
  }

  /* COMPANY */
  getAllCompaniesRest(): Observable<Company[]> {
    return this.httpClient.put<Company[]>(
      this.url + 'admin/companies',
      null,
      {headers: this.header, responseType: 'json'});
  }

  /* USER */
  getAllCompanyUsersRest(): Observable<User[]> {
    return this.httpClient.put<User[]>(
      this.url + 'admin/users',
      null,
      {headers: this.header});
  }
}
