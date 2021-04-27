import {Component} from '@angular/core';
import {ModeService} from '../../../services/mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public constructor(public modeS: ModeService) {
  }
}
