import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../services/customer.service';
import {Coupon} from '../../../models/coupon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customer = new Customer();
  coupons: Coupon[] = [];
  customerId = parseFloat(localStorage.getItem('customerId'));
  private _cartMap;

  public constructor(private customerS: CustomerService) {
  }

  ngOnInit(): void {

    this.customerS.getCustomersAccountRest()
      .subscribe(customer => {
        this.customer = customer;
        this.coupons = customer.cart;
        this._cartMap = new Map();
        this.cartMap(this.coupons);
      });
  }

  public removeFromCart(id: number) {
    this.customerS.removeFromCart(id)
      .subscribe(coupon => {
        this.ngOnInit();
        console.log(('Coupon: ' + coupon.title + ' was returned to the stock.'));
      }, err => {
        alert('Error: ' + err.message);
      });
  }

  private cartMap(couponsArr: Coupon[]) {
    couponsArr.forEach(coupon => {
      let key = coupon.id + '';
      if (this._cartMap.has(key)) {
        const pair: [Coupon, number] = this._cartMap.get(key);
        const coupon: Coupon = pair[0];
        const amount: number = pair[1];

        this._cartMap.set(key, [coupon, amount + 1]);
      } else {
        this._cartMap.set(key, [coupon, 1]);
      }
    });
  }

  get cart() {
    return this._cartMap;
  }

  public deleteCustomer() {
    this.customerS.deleteCustomerRest(this.customerId)
      .subscribe(msg => {
        alert(msg);
      }, error => {
        alert('Error: ' + error.message);
      });
  }

  public buyCoupon(id: number) {
    this.customerS.buyCouponRest(id)
      .subscribe(coupon => {
        this.ngOnInit();
        alert('Coupon: ' + coupon.title + ' id# ' +
          coupon.id + ' was added to your Kupons!');
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
