import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FotoCardComponent} from '../../componente/foto-card/foto-card.component';

@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,FotoCardComponent],
  templateUrl: './revision.component.html',
  styleUrl: './revision.component.scss'
})
export class RevisionComponent {

}
