import {Coupon} from './coupon';

export class Customer {
  public constructor(public id?: number,
                     public firstName?: string,
                     public lastName?: string,
                     public coupons?: Coupon[],
                     public cart?: Coupon[]) {
  }
}
