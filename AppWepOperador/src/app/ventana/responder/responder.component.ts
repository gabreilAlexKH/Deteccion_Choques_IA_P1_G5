import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FotoCardComponent} from '../../componente/foto-card/foto-card.component';

@Component({
  selector: 'app-responder',
  standalone: true,
  imports: [MatButtonModule , MatIconModule,FotoCardComponent],
  templateUrl: './responder.component.html',
  styleUrl: './responder.component.scss'
})
export class ResponderComponent {

}
