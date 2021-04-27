import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {Company} from '../../../models/company';
import {Title} from '@angular/platform-browser';
import {CompanyService} from '../../../services/company.service';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css']
})
export class AdminCompanyComponent implements OnInit {

  public companies: Company[] = [];
  public users: User[] = [];
  public user: User;

  constructor(private adminS: AdminService,
              private userS: UserService,
              private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Companies');
    this.adminS.getAllCompaniesRest()
      .subscribe(companies => {
        this.companies = companies;
      }, error => {
        alert('Error: ' + error.message);
      });
    this.adminS.getAllCompanyUsersRest()
      .subscribe(users=>{
        this.users = users;
      }, error=>{
        alert('Error: ' + error.message);
      })
  }

  public deleteCompany(id: number) {
    this.adminS.deleteCompany(id)
      .subscribe(companies=>{
        this.companies = companies;
        this.ngOnInit();
      }, error=>{
        alert('Error: ' + error.message);
      })
  }
}
