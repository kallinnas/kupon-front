import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {Title} from '@angular/platform-browser';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-coupon',
  templateUrl: './customer-coupon.component.html',
  styleUrls: ['./customer-coupon.component.css']
})
export class CustomerCouponComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private customerS: CustomerService,
                     private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Kupons");

    this.customerS.getAllCouponsRest()
      .subscribe(coupons => {
        this.coupons = coupons;
      }, error => {
        alert("Error: " + error.message);
      })
  }

}
