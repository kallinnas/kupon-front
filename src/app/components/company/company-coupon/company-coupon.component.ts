import {Component, OnInit} from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {Title} from '@angular/platform-browser';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-company-coupon',
  templateUrl: './company-coupon.component.html',
  styleUrls: ['./company-coupon.component.css']
})
export class CompanyCouponComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private title: Title,
                     private companyS: CompanyService) { }

  public ngOnInit(): void {
    this.title.setTitle('Kupons');

    this.companyS.getAllCouponsRest()
      .subscribe(coupons => {
        this.coupons = coupons;
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
