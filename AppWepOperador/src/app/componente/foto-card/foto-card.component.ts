import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Respuesta} from '../../interfases/respuesta'

@Component({
  selector: 'app-foto-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './foto-card.component.html',
  styleUrl: './foto-card.component.scss'
})
export class FotoCardComponent {

  @Input() respuesta: Respuesta = {
    foto: "http://127.0.0.1:5005/images/1.jpg",
    label: "NoAcciednt"
  }

}
