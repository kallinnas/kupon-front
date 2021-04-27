import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company.service';
import {Coupon} from '../../../models/coupon';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.css']
})
export class CouponUpdateComponent implements OnInit{

  public coupon = new Coupon();
  private couponId = parseInt(localStorage.getItem('couponId'));

  public constructor(private companyS: CompanyService) {
  }

  public ngOnInit(): void {
    this.companyS.getCouponRest(this.couponId)
      .subscribe(coupon => {
        this.coupon = coupon;
      }, error => alert('Error: ' + error.message));
  }

  public updateCoupon() {
    // this.coupon.id = this.couponId;

    this.companyS.updateCouponRest(this.coupon)
      .subscribe(coupon => {
      this.coupon = coupon;
      window.location.reload();
      console.log('Coupon: ' + coupon.title + ' was updated successfully!');
    }, error => {
      console.log('Error: ' + error.message);
    });
  }

}
