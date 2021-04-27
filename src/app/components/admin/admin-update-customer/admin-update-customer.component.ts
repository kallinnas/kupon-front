import {Component} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Customer} from '../../../models/customer';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-update-customer',
  templateUrl: './admin-update-customer.component.html',
  styleUrls: ['./admin-update-customer.component.css']
})
export class AdminUpdateCustomerComponent {

  public customer = new Customer();

  public constructor(private adminS: AdminService) {
  }

  idFC = new FormControl(localStorage.getItem('customer_id'));
  firstNameFC = new FormControl('');
  lastNameFC = new FormControl('');

  customerFG = new FormGroup({
    id: this.idFC,
    firstName: this.firstNameFC,
    lastName: this.lastNameFC
  });

  public updateCustomer() {
    this.customer.id = this.idFC.value;
    this.customer.firstName = this.firstNameFC.value;
    this.customer.lastName = this.lastNameFC.value;

    this.adminS.updateCustomerRest(this.customer)
      .subscribe(customer => {
        this.customer = customer;
        alert('The Customer ' + customer.lastName + ' was updated successfully!');
      }, err => {
        alert('Error: ' + err.message);
      });
  }

}
