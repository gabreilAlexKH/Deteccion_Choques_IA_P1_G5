import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModeloChoquesService {

  url:string = "http://127.0.0.1:5005"

  constructor(private http: HttpClient) {
  }


  public post_foto(file:File){

    const body = new FormData();
    body.append("foto", file);
    return this.http.post(this.url + "/modelo" ,  body)

  }


  public get_foto_dir(foto_name:string){
    return this.url + "/images/" + foto_name
  }
}
