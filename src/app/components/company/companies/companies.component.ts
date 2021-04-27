import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UserService} from '../../../services/user.service';
import {Company} from '../../../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companies: Company[];
  public role: string = localStorage.getItem('role');

  public constructor(private title: Title,
                     private userS: UserService) {
  }

  public ngOnInit(): void {
    this.title.setTitle('Companies');

    this.userS.getAllCompaniesRest()
      .subscribe(companies => {
        this.companies = companies;
      }, err => {
        alert('Error: ' + err.message);
      });

  }

}
