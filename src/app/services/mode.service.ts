import {Injectable} from '@angular/core';
import {CompanyService} from './company.service';
import {CustomerService} from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  readonly LOGGED_IN: string = 'LOGGED_IN';
  readonly LOGGED_OUT: string = 'LOGGED_OUT';
  private _LOG_STATUS: string = this.LOGGED_OUT;

  readonly ROLE_GUEST: string = '0';
  readonly ROLE_CUSTOMER: string = '1';
  readonly ROLE_COMPANY: string = '2';
  readonly ROLE_ADMIN: string = '3';
  private _CLIENT_TYPE: string;

  get logStatus(): string {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('role') !== this.ROLE_GUEST) {
      // localStorage.setItem('role', '0'); // to default
      return this.LOGGED_IN;
    }
    return this.LOGGED_OUT;
  }

  get clientType(): string {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('role') !== this.ROLE_GUEST) {
      return localStorage.getItem('role');
    }
    return this.ROLE_GUEST;
  }

  public setUsersClientType() {
    const role = localStorage.getItem('role');

    switch (role) {
      case this.ROLE_CUSTOMER:
        this._CLIENT_TYPE = this.ROLE_CUSTOMER;
        break;
      case this.ROLE_COMPANY:
        this._CLIENT_TYPE = this.ROLE_COMPANY;
        break;
      case this.ROLE_ADMIN:
        this._CLIENT_TYPE = this.ROLE_ADMIN;
        break;
      default:
        this._CLIENT_TYPE = this.ROLE_GUEST;
    }

    if (this._CLIENT_TYPE !== this.ROLE_GUEST) {
      this._LOG_STATUS = this.LOGGED_IN;
    } else {
      this._LOG_STATUS = this.LOGGED_OUT;
    }

    console.log(this._CLIENT_TYPE);
    console.log(this._LOG_STATUS);
  }

}
