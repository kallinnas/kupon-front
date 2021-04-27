import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {ActivatedRoute} from '@angular/router';
import {CouponService} from '../../../services/coupon.service';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {

  public coupon: Coupon;
  public role = '';

  public constructor(private aR: ActivatedRoute,
                     private couponS: CouponService,
                     private companyS: CompanyService) {
  }

  public ngOnInit() {
    const id = +this.aR.snapshot.params.id;

    this.role = localStorage.getItem('role');
    this.couponS.getCouponByIdRest(id)
      .subscribe(coupon => {
        this.coupon = coupon;
      }, err => {
        alert(this.aR.snapshot.params.id);
      });
  }

  public addToCart(): void {
    this.couponS.addToCart(this.coupon.id)
      .subscribe(coupon => {
        this.coupon = coupon;
      }, err => {
        alert(err.message);
      });
  }

  public deleteCoupon() {
    this.companyS.deleteCouponRest(this.coupon.id)
      .subscribe(msg => {
        alert(msg);
      }, err => {
        alert('Error:' + err.message);
      });
  }


}
