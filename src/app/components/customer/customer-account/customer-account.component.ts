import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {Customer} from '../../../models/customer';
import {Coupon} from '../../../models/coupon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {

  public customer = new Customer();
  public coupons: Coupon[] = [];
  public customerId = parseFloat(localStorage.getItem('customerId'));
  private _cartMap;

  public constructor(private customerS: CustomerService,
                     private router: Router) {
  }

  ngOnInit(): void {

    this.customerS.getCustomersAccountRest()
      .subscribe(customer => {
        localStorage.setItem('customerId', customer.id.toString())
        this.customer = customer;
        this.coupons = customer.coupons;
        this._cartMap = new Map();
        this.cartMap(this.coupons);
      }, error => {
        alert('Error: ' + error.message);
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
    this.customerS.deleteCustomerRest(this.customerId);
    this.router.navigate(['/logout']);
    alert('Customer was deleted successfully!')
  }

}
