import {Component, OnInit} from '@angular/core';
import {CompanyService} from 'src/app/services/company.service';
import {Company} from '../../../models/company';

@Component({
  selector: 'app-company-update-email',
  templateUrl: './company-update-email.component.html',
  styleUrls: ['./company-update-email.component.css']
})
export class CompanyUpdateEmailComponent implements OnInit {

  public token: string = localStorage.getItem('token');
  public company = new Company();
  public email = '';
  public password = '';
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

  public updateEmail() {
    this.companyS.updateEmailRest(this.email)
        .subscribe(msg => {
          alert(msg.toString());
      }, error => {
        alert('Error: ' + error.message);
      });
  }


}
