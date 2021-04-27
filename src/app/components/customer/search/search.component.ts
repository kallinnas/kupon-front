import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public token = localStorage.getItem('token');
  public id: number;
  public endDate: Date;
  public title: string;
  public price: number;

  public constructor(private router: Router) {
  }

  public getCouponById() {
    this.router.navigate(['/coupon-details/' + this.id]);
  }

  public getCouponsByTitle() {
    localStorage.setItem('title', this.title);
    this.router.navigate(['/coupon-by-title']);
  }

  public getCouponsByBelowPrice() {
    localStorage.setItem('price', this.price.toString());
    this.router.navigate(['/coupon-by-price']);
  }

  ngOnInit() {
  }


}
