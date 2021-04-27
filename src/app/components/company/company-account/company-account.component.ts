import {Component, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from '../../../services/company.service';
import {Coupon} from '../../../models/coupon';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {
  public company: Company = new Company();
  public coupon: Coupon = new Coupon();
  public coupons: Coupon[] = [];

  public constructor(private companyS: CompanyService) {
  }

  ngOnInit() {

    this.companyS.getCompanyAccountRest()
      .subscribe(company => {
        this.company = company;
        /* companyID must be set in ngOnInit() otherwise won't display company */
        localStorage.setItem('companyId', company.id.toString());
      }, error => {
        alert('Error:' + error.message);
      });

    this.companyS.getAllCompanyCoupons()
      .subscribe(coupons => {
        this.coupons = coupons;
      }, err => {
        alert('Error:' + err.message);
      });

  }

  public saveCouponID(id: number): void {
    localStorage.setItem('couponId', id.toString());
  }

  public deleteCoupon(id: number) {
    this.companyS.deleteCouponRest(id)
      .subscribe(msg => {
        this.ngOnInit();
        alert(msg);
      }, err => {
        alert('Error:' + err.message);
      });
  }

}
