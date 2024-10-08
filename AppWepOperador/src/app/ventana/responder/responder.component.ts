import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FotoCardComponent} from '../../componente/foto-card/foto-card.component';
import {Respuesta} from '../../interfases/respuesta'
import { ActivatedRoute , Router} from '@angular/router';
import {ModeloChoquesService} from "../../servicio/modelo-choques.service"
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-responder',
  standalone: true,
  imports: [MatButtonModule , MatIconModule,FotoCardComponent , MatProgressSpinnerModule],
  templateUrl: './responder.component.html',
  styleUrl: './responder.component.scss'
})
export class ResponderComponent {


  constructor(private route: ActivatedRoute , private serModelo: ModeloChoquesService, private rerouter: Router){
  }

  respuesta: Respuesta = {
    foto: "http://127.0.0.1:5005/images/1.jpg",
    label: "Accident"
  }

  not_call_salud = true
  not_call_atm = true
  not_call_bomberos = true
  not_call_policia = true

  foto:string =  "1.jpg"

  ngOnInit() {

    this.route.params.subscribe(async params => {
      this.foto = params['foto'];
      let foto_name = this.foto.substring(1 , this.foto.length - 1)
      this.respuesta.foto = this.serModelo.get_foto_dir(foto_name)

      this.respuesta.label = params['label']

      if (this.respuesta.label == "NoAcciednt"){
        this.rerouter.navigate(["/rechazado/" + this.foto])
      }

    })

  }

  despacharSalud(){
    this.not_call_salud = false
  }

  despacharATM(){
    this.not_call_atm = false
  }

  despacharBomberos(){
    this.not_call_bomberos = false
  }

  despacharPolicia(){
    this.not_call_policia = false
  }
}
