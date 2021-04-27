import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {Customer} from '../../../models/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  public customer = new Customer();
  public customerId = parseFloat(localStorage.getItem('customerId'));

  public constructor(private customerS: CustomerService,
                     private router: Router) {
  }

  public ngOnInit(): void {
    this.customerS.getCustomersAccountRest()
      .subscribe(customer => {
        this.customer = customer;
      }, error => alert('Error: ' + error.message));
  }

  public updateCustomer() {
    this.customerS.updateCustomerRest(this.customer)
      .subscribe(customer => {
        this.customer = customer;
        window.location.reload();
        console.log('Customer ' + customer.firstName + ' '
          + customer.lastName + ' was updated successfully!');
      }, error => {
        alert('Error: ' + error.message);
      });
  }

  public deleteCustomer() {
    this.customerS.deleteCustomerRest(this.customerId)
      .subscribe(msg => {
        alert(msg);
      }, error => {
        alert('Error: ' + error.message);
      });
  }
}
