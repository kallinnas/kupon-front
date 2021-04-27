import {Component, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-company-details',
  templateUrl: './admin-company-details.component.html',
  styleUrls: ['./admin-company-details.component.css']
})
export class AdminCompanyDetailsComponent implements OnInit {

  public role = localStorage.getItem('role');
  public companyId = parseFloat(localStorage.getItem('companyId'));
  public company = new Company();
  public coupons = this.company.coupons;

  public constructor(private adminS: AdminService,
                     private aRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.companyId = +this.aRoute.snapshot.params.id;

    localStorage.setItem('companyId', this.companyId.toString());

    this.adminS.getCompanyByIdRest(this.companyId)
      .subscribe(company => {
        this.company = company;
      }, err => {
        alert('Error: ' + err.message);
      });

    this.adminS.getCompanyCouponsRest(this.companyId)
      .subscribe(coupons => {
        this.coupons = coupons;
      }, err => {
        alert('Error: ' + err.message);
      });

    /* Important to set a role otherwise company won't display */
    this.role = localStorage.getItem('role');
  }

  public deleteCoupon(id: number): void {
    this.adminS.deleteCouponRest(id)
      .subscribe(msg => {
        this.ngOnInit();
        alert(msg);
      }, error => {
        alert('Error: ' + error.message);
      });
  }

  public saveCouponId(id: number): void {
    localStorage.setItem('couponId', id.toString());
  }

  public deleteCompany(): void {
    this.adminS.deleteCompany(this.companyId)
      .subscribe(msg => {
        alert(msg);
      });
  }


}
