import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.scss'
})
export class NotificacionComponent {

}
