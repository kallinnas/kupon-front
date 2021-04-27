import { Component, OnInit } from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-company-update-password',
  templateUrl: './company-update-password.component.html',
  styleUrls: ['./company-update-password.component.css']
})
export class CompanyUpdatePasswordComponent implements OnInit {

  public token: string = localStorage.getItem('token');
  public company = new Company();
  public password = '';
  public newPassword = '';
  public confirm = false;

  public constructor(private companyS: CompanyService) {
  }

  public ngOnInit(): void {
    this.companyS.getCompanyAccountRest()
      .subscribe(company => {
        this.company = company;
      }, error => alert('Error: ' + error.message));
  }

  public confirmPassword() {
    this.companyS.confirmPassword(this.password)
      .subscribe(confirm => {
        this.confirm = confirm;
      }, error => {
        alert('Error: ' + error.message);
      });
  }

  public updatePassword() {
    this.companyS.updatePasswordRest(this.newPassword)
      .subscribe(msg => {
        console.log(msg);
        alert(msg);
      }, error => {
        alert('Error: !!' + error.message);
      });
  }

}
