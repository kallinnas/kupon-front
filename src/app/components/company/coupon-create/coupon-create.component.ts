import {Component} from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent {

  token: string = localStorage.getItem('token');
  public coupon = new Coupon();

  public constructor(private companyS: CompanyService) {
  }

  public createCoupon(): void {
    this.coupon.companyId = parseInt(localStorage.getItem('companyId'));

    this.companyS.createCouponRest(this.coupon)
      .subscribe(coupon => {
        alert('Coupon ' + coupon.title + ' with ID#'
          + coupon.id + ' was created successfully!');
        window.location.reload();
      }, err => {
        alert('Error: ' + err.message);
      });
  }


}
