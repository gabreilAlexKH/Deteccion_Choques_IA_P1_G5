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
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatCardModule,MatButtonModule,MatDividerModule,MatProgressBarModule,MatToolbarModule , MatSnackBarModule],
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

    constructor(private serModelo: ModeloChoquesService , private rerouter: Router, private _snackBar: MatSnackBar) {

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

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

    onFileUpload():void{

      if (this.isImageFile(this.file as File)){
        this.enviar_ready = false
        this.subir_ready = true

      }else{
        this.subir_ready = true
        this.openSnackBar("No es imagen" , "Ok")
      }
    }

    onFileSend():void{

      this.enviando = false

      this.serModelo.post_foto(this.file as File).subscribe((response) =>{



        var res = response as Respuesta
        var foto = res.foto
        var label = res.label
        this.enviando = true

        this.console = res.label

        if (label == "NoAcciednt"){
          this.rerouter.navigate(["/rechazado/" + '"' + foto + '"'])
        }else{
          this.rerouter.navigate(["operador/notificacion/" + '"' + foto + '"' + "/" + label])
        }

      })
    }
}
