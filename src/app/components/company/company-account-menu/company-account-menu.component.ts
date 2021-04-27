import { Component, OnInit } from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-company-account-menu',
  templateUrl: './company-account-menu.component.html',
  styleUrls: ['./company-account-menu.component.css']
})
export class CompanyAccountMenuComponent implements OnInit {

  public company: Company = new Company();

  constructor(private companyS: CompanyService) { }

  ngOnInit(): void {
    this.companyS.getCompanyAccountRest()
      .subscribe(company => {
        this.company = company;
        /* companyID must be set in ngOnInit() otherwise won't display company */
        localStorage.setItem('companyId', company.id.toString());
      }, error => {
        alert('Error:' + error.message);
      });
  }

}
