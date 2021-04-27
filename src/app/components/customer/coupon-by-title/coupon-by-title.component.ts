import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {CouponService} from '../../../services/coupon.service';

@Component({
  selector: 'app-coupon-by-title',
  templateUrl: './coupon-by-title.component.html',
  styleUrls: ['./coupon-by-title.component.css']
})
export class CouponByTitleComponent implements OnInit {

  public coupons: Coupon[];
  public title: string = localStorage.getItem('title');

  public constructor(private couponS: CouponService) { }

  public ngOnInit(): void {
    this.couponS.getCouponsByTitleRest(this.title)
      .subscribe(coupons => {
        setTimeout(() => {
          this.coupons = coupons;
        }, 1000);
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
