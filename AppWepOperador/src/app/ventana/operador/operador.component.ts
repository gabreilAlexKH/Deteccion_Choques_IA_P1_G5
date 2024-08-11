import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-operador',
  standalone: true,
  imports: [RouterOutlet, MatIconModule , MatDividerModule , MatButtonModule,MatToolbarModule],
  templateUrl: './operador.component.html',
  styleUrl: './operador.component.scss'
})
export class OperadorComponent {

}
