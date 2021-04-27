import {Component, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {CustomerService} from '../../../services/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-company-details',
  templateUrl: './customer-company-details.component.html',
  styleUrls: ['./customer-company-details.component.css']
})
export class CustomerCompanyDetailsComponent implements OnInit {

  public role: string = localStorage.getItem('role');
  public company = new Company();
  public coupons = this.company.coupons;
  public id = null;

  public constructor(private customerS: CustomerService,
                     private aRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = +this.aRoute.snapshot.params.id;

    this.customerS.getCompanyByIdRest(this.id)
      .subscribe(company => {
        this.company = company;
      }, error => {
        alert('Error: ' + error.message);
      });

    this.customerS.getAllCompanyCoupons(this.id)
      .subscribe(coupons => {
        this.coupons = coupons;
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
