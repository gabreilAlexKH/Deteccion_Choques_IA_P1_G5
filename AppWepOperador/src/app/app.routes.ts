import { Routes } from '@angular/router';


import { InicioComponent } from "./ventana/inicio/inicio.component";
import { RechazadoComponent } from "./ventana/rechazado/rechazado.component";
import { OperadorComponent } from "./ventana/operador/operador.component";
import { NotificacionComponent } from "./ventana/notificacion/notificacion.component";
import { RevisionComponent } from "./ventana/revision/revision.component";
import { ResponderComponent } from "./ventana/responder/responder.component";

export const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "rechazado/:foto", component: RechazadoComponent},
  {path: "operador", component: OperadorComponent,
    children: [
      { path: "notificacion/:foto/:label", component: NotificacionComponent },
      { path: "revision/:foto/:label", component: RevisionComponent },
      { path: "responder/:foto/:label", component: ResponderComponent },
      { path: "**", redirectTo:"inicio" },
    ]
  },
  {path: "**" , redirectTo:"inicio"}
];
