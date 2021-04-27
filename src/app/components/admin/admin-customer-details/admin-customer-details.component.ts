import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../../services/admin.service';
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-admin-customer-details',
  templateUrl: './admin-customer-details.component.html',
  styleUrls: ['./admin-customer-details.component.css']
})
export class AdminCustomerDetailsComponent implements OnInit {

  public role = localStorage.getItem("role");
  public customer = new Customer();
  public coupons = this.customer.coupons;
  public customerId = parseFloat(localStorage.getItem("customerId"));

  public constructor(private adminS: AdminService,
                     private aRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.customerId = +this.aRoute.snapshot.params.id;
    localStorage.setItem("customer_id", this.customerId.toString());

    this.adminS.getCustomerByIdRest(this.customerId)
      .subscribe(customer => {
        this.customer = customer;
      }, error => {
        alert("Error: " + error.message);
      });

    this.adminS.getCustomerCouponsRest(this.customerId)
      .subscribe(coupons => {
        this.coupons = coupons;
      }, err => {
        alert("Error: " + err.message);
      });

    /* Important to set a role otherwise customers won't display */
    this.role = localStorage.getItem("role");
  }

  public deleteCustomerById(): void {
    this.adminS.deleteCustomerRest(this.customerId)
      .subscribe(customer => {
        alert("Customer has been deleted!")
      })
  }

  public deleteCustomersCoupon(couponId: number) {
    this.adminS.deleteCustomersCouponRest(this.customerId, couponId)
      .subscribe(c => {
        alert("Customer's coupon has been deleted!")
      }, err => {
        alert("Error: " + err.message);
      });
  }

  // public saveCouponID(id: number): void {
  //   localStorage.setItem("couponId", id.toString());
  // }

}

