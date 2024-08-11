import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

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

    constructor() {

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
            const formData = new FormData();
            formData.append("foto", file);
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
    }
}
