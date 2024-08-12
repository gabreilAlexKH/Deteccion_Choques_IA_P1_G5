import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Respuesta} from '../../interfases/respuesta'
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.scss'
})
export class NotificacionComponent {

  constructor(private route: ActivatedRoute, private rerouter: Router){

  }

  respuesta: Respuesta = {
    foto: "1.jpg",
    label: "Accident"
  }


  ngOnInit() {

    this.route.params.subscribe(async params => {

      this.respuesta.foto = params['foto'];
      this.respuesta.label = params["label"]

      if (this.respuesta.label == "NoAcciednt"){
        this.rerouter.navigate(["/rechazado/" + this.respuesta.foto])
      }

    })

  }

}
