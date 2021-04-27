import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {ModeService} from '../../../services/mode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements AfterViewChecked {

  constructor(private cDR: ChangeDetectorRef,
              private modeS: ModeService, private router: Router) {
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('couponId');
    localStorage.removeItem('companyId');
    localStorage.removeItem('customerId');
    localStorage.setItem('role', this.modeS.ROLE_GUEST);
    // Sets back <app-menu>
    this.modeS.setUsersClientType();

    this.router.navigate(['/home']);
  }

  ngAfterViewChecked() {
    this.cDR.detectChanges();
    setTimeout(() => {
      this.logout();
    });
  }
}
