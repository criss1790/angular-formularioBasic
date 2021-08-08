import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/usuario.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input() usuarios: Persona[ ]=[ ];

}
