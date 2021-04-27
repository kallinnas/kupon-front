import {Component, OnInit} from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-admin-update-company',
  templateUrl: './admin-update-company.component.html',
  styleUrls: ['./admin-update-company.component.css']
})
export class AdminUpdateCompanyComponent implements OnInit {

  public token: string = localStorage.getItem('token');
  public company = new Company();

  public constructor(private companyS: CompanyService) {
  }

  public ngOnInit(): void {
    this.companyS.getCompanyAccountRest()
      .subscribe(company => {
        this.company = company;
      }, error => alert('Error: ' + error.message));
  }


  public updateCompany() {
    this.companyS.updateCompanyRest(this.company)
      .subscribe(company => {
        this.company = company;
        alert('The Company ' + company.name + ' was updated successfully!');
      }, error => {
        alert('Error: ' + error.message);
      });
  }
}
