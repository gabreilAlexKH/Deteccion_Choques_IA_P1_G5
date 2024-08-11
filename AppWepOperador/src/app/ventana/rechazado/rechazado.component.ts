import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FotoCardComponent} from '../../componente/foto-card/foto-card.component';

@Component({
  selector: 'app-rechazado',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,FotoCardComponent],
  templateUrl: './rechazado.component.html',
  styleUrl: './rechazado.component.scss'
})
export class RechazadoComponent {

}
