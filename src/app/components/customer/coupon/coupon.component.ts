import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../../models/coupon';
import {Title} from '@angular/platform-browser';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  public coupons: Coupon[] = [];

  public constructor(private userS: UserService,
                     private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Kupons");

    this.userS.getAllCouponsRest()
      .subscribe(coupons => {
        this.coupons = coupons;
      }, error => {
        alert("Error: " + error.message);
      })
  }

}
