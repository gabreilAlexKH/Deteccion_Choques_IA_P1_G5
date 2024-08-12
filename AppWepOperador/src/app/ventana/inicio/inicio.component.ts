import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ModeloChoquesService} from "../../servicio/modelo-choques.service"
import {Respuesta} from "../../interfases/respuesta"
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatCardModule,MatButtonModule,MatDividerModule,MatProgressBarModule,MatToolbarModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  enviando = true
  subir_ready = true
  enviar_ready = true

  fileName = '';
  file: File | undefined;

  console = "hola"

    constructor(private serModelo: ModeloChoquesService , private rerouter: Router) {

    }

    isImageFile(file: File ): boolean {
      return file.type.startsWith('image/');
    }

    onFileSelected(event: any): void {

        const file:File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.subir_ready = false
            this.file = file
        }
    }

    onFileUpload():void{

      if (this.isImageFile(this.file as File)){
        this.enviar_ready = false
      }else{
        this.subir_ready = true
      }
    }

    onFileSend():void{
      this.enviando = false

      var file_src = this.file?.webkitRelativePath
      this.console = file_src as string
      this.serModelo.post_foto(file_src as string).subscribe((response) =>{

        this.console = "prosesando"

        var res = response as Respuesta
        var foto = res.foto
        var label = res.label
        this.enviando = true

        if (label == "NoAcciednt"){
          this.rerouter.navigate(["/rechazado/" + '"' + foto + '"'])
        }else{
          this.rerouter.navigate(["/notificacion/" + '"' + foto + '"' + "/" + label])
        }

      })
    }
}
