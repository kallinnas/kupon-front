import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Coupon} from '../../../models/coupon';

@Component({
  selector: 'app-admin-update-coupon',
  templateUrl: './admin-update-coupon.component.html',
  styleUrls: ['./admin-update-coupon.component.css']
})
export class AdminUpdateCouponComponent implements OnInit{

  public coupon = new Coupon();
  private couponId: number;
  private companyId = parseInt(localStorage.getItem('companyId'));

  constructor(private adminS: AdminService) {
  }

  public ngOnInit(): void {
    this.couponId = parseInt(localStorage.getItem('couponId'));
    this.adminS.getCouponRest(this.couponId)
      .subscribe(coupon => {
        this.coupon = coupon;
      }, error => alert('Error: ' + error.message));
  }

  public updateCoupon() {
    this.coupon.id = this.couponId;
    console.log(this.coupon);

    this.adminS.updateCouponRest(this.coupon)
      .subscribe(coupon => {
        window.location.reload();
        this.coupon = coupon;
        console.log('Coupon ' + coupon.title + ' was updated successfully!');
      }, error => {
        alert('Error: ' + error.message);
      });
  }
}
