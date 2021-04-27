import { Component } from '@angular/core';
import {ModeService} from '../../../services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent{

  constructor(public modeService: ModeService) { }

}
