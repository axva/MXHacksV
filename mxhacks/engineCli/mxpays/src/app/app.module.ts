// Se deben hacer las importaciones de los modulos para visualizar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MynavbarComponent } from './componets/mynavbar/mynavbar.component';
import { AboutComponent } from './componets/about/about.component';
import { FooterComponent } from './componets/footer/footer.component';
import { FormRegistrerComponent } from './componets/form-registrer/form-registrer.component';
import { app_routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    MynavbarComponent,
    FooterComponent,
    AboutComponent,
    FormRegistrerComponent
  ],
  // app_routing es el modulo que se encarga de las rutas
  imports: [
    BrowserModule,
    app_routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
