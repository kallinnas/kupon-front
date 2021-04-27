import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {ModeService} from '../../../services/mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private loginS: LoginService, private router: Router,
              private modeS: ModeService) {
  }

  public login() {
    this.loginS.login(this.email, this.password)
      .subscribe(token => {
        // The first number of token is role-number of user
        const role = token.token.toString().substring(0, 1);
        localStorage.setItem('role', role);

        // The first element must to be cut.
        const tokenOnly = token.token.toString().slice(1, 16);
        localStorage.setItem('token', tokenOnly);

        // Sets role in mode service for current user
        this.modeS.setUsersClientType();

        this.router.navigate(['/home']);
      });
  }

  public loginReg(email: string, password: string) {
    this.loginS.login(email, password)
      .subscribe(token => {
        localStorage.setItem('token', token.token),
          console.log(token.token),
          this.router.navigate(['/home']);
      });
    (err: any) => alert(err);
  }

  public register(): void {
    this.router.navigate(['/reg']);
  }


}
