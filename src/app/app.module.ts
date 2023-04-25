import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './component/habilidades/habilidades.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ExperienciaLaboralComponent } from './component/experiencia-laboral/experiencia-laboral.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaLaboralComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
