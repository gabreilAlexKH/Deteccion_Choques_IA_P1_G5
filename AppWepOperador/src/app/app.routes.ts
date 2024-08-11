import { Routes } from '@angular/router';


import { InicioComponent } from "./ventana/inicio/inicio.component";
import { RechazadoComponent } from "./ventana/rechazado/rechazado.component";
import { OperadorComponent } from "./ventana/operador/operador.component";
import { NotificacionComponent } from "./ventana/notificacion/notificacion.component";
import { RevisionComponent } from "./ventana/revision/revision.component";
import { ResponderComponent } from "./ventana/responder/responder.component";

export const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "rechazado", component: RechazadoComponent},
  {path: "operador", component: OperadorComponent,
    children: [
      { path: "notificacion", component: NotificacionComponent },
      { path: "revision", component: RevisionComponent },
      { path: "responder", component: ResponderComponent },
      { path: "**", redirectTo:"notificacion" },
    ]
  },
  {path: "**" , redirectTo:"inicio"}
];
