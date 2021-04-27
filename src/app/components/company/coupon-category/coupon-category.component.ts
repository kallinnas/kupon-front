import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CouponService} from '../../../services/coupon.service';

@Component({
  selector: 'app-coupon-category',
  templateUrl: './coupon-category.component.html',
  styleUrls: ['./coupon-category.component.css']
})
export class CouponCategoryComponent implements OnInit {
  public coupons = [];
  public category = 0;
  token: string = localStorage.getItem('token');

  constructor(private couponS: CouponService,
              private aRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = +this.aRoute.snapshot.params.category;

    this.couponS.getCouponsByCategoryRest(this.category)
      .subscribe(coupons => {
        this.coupons = coupons;
      }, err => {
        alert('Error: ' + err.message);
      });

  }
}
