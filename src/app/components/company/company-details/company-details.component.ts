import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company.service';
import {ModeService} from '../../../services/mode.service';
import {Company} from '../../../models/company';
import {ActivatedRoute} from '@angular/router';
import {Coupon} from 'src/app/models/coupon';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public id = null;
  public company = new Company();
  public coupons: Coupon[];
  public role = localStorage.getItem('role');

  public constructor(private companyS: CompanyService,
                     private modeS: ModeService,
                     private aRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.aRoute.snapshot.params.id;

    this.companyS.getCompanyByIdRest(this.id)
      .subscribe(company => {
        this.company = company;
      }, error => {
        alert('Error: ' + error.message);
      });

    this.companyS.getCouponsByCompanyIdRest(this.id)
      .subscribe(coupons => {
        this.coupons = coupons;
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
