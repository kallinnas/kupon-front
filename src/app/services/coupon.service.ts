import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coupon} from '../models/coupon';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private url = environment.baseUrl;
  private token: string = localStorage.getItem('token');

  public constructor(private httpClient: HttpClient) {
  }

  public getCouponByIdRest(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(
      this.url + 'kupons/' + id,
      {responseType: 'json'});
  }

  public getCouponsByCategoryRest(category: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'kupons/category/' + category,
      {responseType: 'json'});
  }

  public getCouponsByTitleRest(title: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'customer/' + this.token + '/title/' + title,
      {responseType: 'json'});
  }

  public getCouponsByBelowPrice(price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + 'customer/' + this.token + '/belowPrice/' + price,
      {responseType: 'json'});
  }

  public addToCart(id: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(
      this.url + 'customer/' + this.token + '/addToCart/' + id,
      {responseType: 'json'});
  }



  public getAllCouponsRest(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(
      this.url + this.token + '/getAllCoupons',
      {responseType: 'json'});
  }

  // OBSERVABLE Asyncronic

  // public getAllCouponsAsync3(): Observable<Coupon[]> {
  //   return Observable.create(observer => {
  //     setTimeout(() => {

  //       try {
  //         const arr: Coupon[] = [];
  //         let startDate = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyy');
  //         let endDate = this.datepipe.transform(new Date(2076, 2, 28), 'MM-dd-yyyy');

  //         arr.push(new Coupon(1, "Computer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         arr.push(new Coupon(2, "Frige", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         arr.push(new Coupon(3, "Mixer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         observer.next(arr);

  //       } catch (error) {
  //         observer(error);
  //       }
  //     }, 3000);
  //   });
  // }


  // JSON File way f-tion

  // public getAllCouponsAsync(): Observable<Coupon[]> {
  //   return this.httpClient.get<Coupon[]>("/assets/json/coupons.json");
  // }


  // ARRAY way f-tion

  // public getAllCoupons(): Coupon[]{
  //   const arr: Coupon[] = [];

  //   let startDate = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyy');
  //   let endDate = this.datepipe.transform(new Date(2076, 2, 28), 'MM-dd-yyyy');

  //   arr.push(new Coupon(1, "Computer", startDate , endDate, 1, 100, 15, "Electronica", "http"));
  //   arr.push(new Coupon(2, "Frige", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //   arr.push(new Coupon(3, "Mixer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //   return arr;
  // }


  // CALLBACK Asynchronic

  // public getAllCouponsAsync1(successCallBack, failCallBack): void {
  //   setTimeout(() => {

  //     try {
  //       const arr: Coupon[] = [];
  //       let startDate = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyy');
  //       let endDate = this.datepipe.transform(new Date(2076, 2, 28), 'MM-dd-yyyy');

  //       arr.push(new Coupon(1, "Computer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //       arr.push(new Coupon(2, "Frige", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //       arr.push(new Coupon(3, "Mixer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //       successCallBack(arr);

  //     } catch (error) {
  //       failCallBack(error);
  //     }

  //   }, 5000);

  // }


  // PROMISE Asynchronic

  // public getAllCouponsAsync2(): Promise<Coupon[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {

  //       try {
  //         const arr: Coupon[] = [];
  //         let startDate = this.datepipe.transform(new Date(1989, 2, 27), 'MM-dd-yyyy');
  //         let endDate = this.datepipe.transform(new Date(2076, 2, 28), 'MM-dd-yyyy');

  //         arr.push(new Coupon(1, "Computer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         arr.push(new Coupon(2, "Frige", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         arr.push(new Coupon(3, "Mixer", startDate, endDate, 1, 100, 15, "Electronica", "http"));
  //         resolve(arr);

  //       } catch (error) {
  //         reject(error);
  //       }
  //     }, 3000);
  //   });
  // }


}
