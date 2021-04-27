import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Coupon} from '../../../models/coupon';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-admin-coupon',
  templateUrl: './admin-coupon.component.html',
  styleUrls: ['./admin-coupon.component.css']
})
export class AdminCouponComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private adminS: AdminService,
                     private title: Title) {
  }

  public ngOnInit(): void {
    this.title.setTitle('Kupons');

    setTimeout(()=>{
      this.adminS.getAllCouponsRest()
        .subscribe(coupons => {
          this.coupons = coupons;
        }, err => {
          alert('Error: ' + err.message);
        });
    })
  }

  public saveCouponID(couponId: number): void {
    localStorage.setItem('couponId', String(couponId));
  }

  public deleteCoupon(id: number) {
    this.adminS.deleteCouponRest(id)
      .subscribe(coupons => {
        this.coupons = coupons;
        this.ngOnInit();
      }, err => {
        alert('Error: ' + err.message);
      });
  }


}
