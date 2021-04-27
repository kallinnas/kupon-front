import {Component, OnInit} from '@angular/core';
import {CouponService} from '../../../services/coupon.service';
import {Coupon} from '../../../models/coupon';

@Component({
  selector: 'app-coupon-by-price',
  templateUrl: './coupon-by-price.component.html',
  styleUrls: ['./coupon-by-price.component.css']
})
export class CouponByPriceComponent implements OnInit {

  public coupons: Coupon[];
  public price = parseFloat(localStorage.getItem('price'));

  public constructor(private couponS: CouponService) {
  }

  public ngOnInit(): void {
    this.couponS.getCouponsByBelowPrice(this.price)
      .subscribe(coupons => {
        this.coupons = coupons;
        localStorage.removeItem('price');
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
