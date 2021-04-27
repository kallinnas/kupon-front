import { Component, OnInit } from '@angular/core';
import {Company} from '../../../models/company';
import {CompanyService} from '../../../services/company.service';

@Component({
  selector: 'app-admin-account-menu',
  templateUrl: './admin-account-menu.component.html',
  styleUrls: ['./admin-account-menu.component.css']
})
export class AdminAccountMenuComponent implements OnInit {

  public company: Company = new Company();

  constructor(private companyS: CompanyService) { }

  ngOnInit(): void {

  }

}
