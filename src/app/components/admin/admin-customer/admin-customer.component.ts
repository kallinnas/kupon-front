import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Title} from '@angular/platform-browser';
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  public customers: Customer[];

  public constructor(private adminS: AdminService,
                     private title: Title) {
  }

  public ngOnInit(): void {
    this.title.setTitle('Customers');

    this.adminS.getAllCustomersRest()
      .subscribe(c => {
        this.customers = c;
      }, error => {
        alert('Error: ' + error.message);
      });
  }

}
