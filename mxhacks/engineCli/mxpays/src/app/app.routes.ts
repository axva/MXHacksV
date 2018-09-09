//
import {RouterModule, Routes} from '@angular/router';
//se esta importado la direccion de los componentes (pages)
import{
  AboutComponent,
  FormRegistrerComponent
} // de importar desde el archivo index.paginas.ts
from "./componets/index.paginas";

//se indica en que ruta se va a llamar el compoenente
const app_routes:Routes = [
  {path: 'home', component: AboutComponent},
  {path: 'register', component: FormRegistrerComponent}
];
//
export const app_routing = RouterModule.forRoot(app_routes, { useHash:false });
