import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/company';
import {Coupon} from '../models/coupon';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = environment.baseUrl;
  private token: string = localStorage.getItem('token');
  private header: HttpHeaders = new HttpHeaders().append('token', this.token);

  constructor(private httpClient: HttpClient) {
  }

  /* COMPANY */
  public getCompanyAccountRest(): Observable<Company> {
    return this.httpClient.post<Company>(
      this.url + 'company/account',
      null,
      {headers: this.header});
  }

  public updateCompanyRest(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(
      this.url + 'company/updateCompany', company,
      {headers: this.header});
  }

  public updateEmailRest(email: string): Observable<string> {
    this.header = this.header.append('email', email);
    return this.httpClient.put<string>(
      this.url + 'company/updateEmail',
      null,
      // @ts-ignore
      {headers: this.header, responseType: 'text'});
  }

  public updatePasswordRest(newPassword: string): Observable<string> {
    this.header = this.header.append('newPassword', newPassword);
    return this.httpClient.put<string>(
      this.url + 'company/updatePassword',
      null,
      // @ts-ignore
      {headers: this.header, responseType: 'text'}
    );
  }

  public confirmPassword(password: string): Observable<boolean> {
    let header = this.header.append('password', password);
    return this.httpClient.put<boolean>(
      this.url + 'company/confirmPassword',
      null,
      {headers: header}
    );
  }

  /* COUPONS */
  public getAllCompanyCoupons(): Observable<Coupon[]> {
    return this.httpClient.post<Coupon[]>(
      this.url + 'company/coupons',
      null,
      {headers: this.header});
  }

  public getCompanyByIdRest(id: number): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url + 'company/' + this.token + '/getCompanyById/' + id,
      {responseType: 'json'});
  }


  public getAllCompaniesRest(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(
      this.url + 'company/' + this.token + '/getAllCompanies',
      {withCredentials: false});
  }


  // COUPON
  public getCouponRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(
      this.url + 'company/' + this.token + '/getCoupon/' + id,
      {responseType: 'json'});
  }

  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'company/' + this.token + '/getAllCoupons',
      {responseType: 'json'});
  }


  // UPDATE FOR COUPON
  public updateCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(
      this.url + 'company/' + this.token + '/updateCoupon', coupon,
      {responseType: 'json'});
  }

  public createCouponRest(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(
      this.url + 'company/createCoupon', coupon,
      {headers: this.header, responseType: 'json'});
  }

  public deleteCouponRest(id: number): Observable<any> {
    return this.httpClient.delete<Coupon>(
      this.url + 'company/' + this.token + '/deleteCouponById/' + id,
      // @ts-ignore
      {responseType: 'text'});
  }


  public getCouponsByCompanyIdRest(id: number): Observable<Coupon[]> {
    return this.httpClient.put<Coupon[]>(
      this.url + 'company/coupons/' + id,
      null,
      {headers:this.header, responseType: 'json'}
    );

  }
}
