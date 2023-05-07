import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AspiracionesComponent } from './componentes/aspiraciones/aspiraciones.component';
import { interceptorProvider } from './service/interceptor-service';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './componentes/estudios/new-estudio.component';
import { EditEstudioComponent } from './componentes/estudios/edit-estudio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImagenesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AspiracionesComponent,
    EstudiosComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEstudioComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
