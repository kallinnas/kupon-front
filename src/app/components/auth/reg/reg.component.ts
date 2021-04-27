import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ModeService} from '../../../services/mode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  email = '';
  password = '';

  constructor(private loginS: LoginService,
              private modeS: ModeService,
              private router: Router) {
  }

  public register(role: number) {
    this.loginS.registration(this.email, this.password, role)
      .subscribe(token => {
          role = token.token.toString().substring(0, 1);
          localStorage.setItem('role', role.toString());
          const tokenOnly = token.token.toString().slice(1, 16);
          localStorage.setItem('token', tokenOnly);

          this.modeS.setUsersClientType();
          this.router.navigate(['/home']);
        },
        err => alert(err));
  }

}
