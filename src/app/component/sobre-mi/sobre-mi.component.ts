import { Component,OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  persona: persona = new persona("","","");

  constructor(){}
}
