import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewExperienciaComponent } from './component/experiencia-laboral/new-experiencia.component';
import { EditExpComponent } from './component/experiencia-laboral/edit-exp.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editExp/:id',component: EditExpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
