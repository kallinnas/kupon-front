import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company.service';
import {Company} from '../../../models/company';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

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
