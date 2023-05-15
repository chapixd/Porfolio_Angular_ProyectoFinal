import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';

import { LoginService } from 'src/app/service/login.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { User } from 'src/app/service/user';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
experiencia: Experiencia[] = [];
userLoginOn:boolean=false;


constructor(private sExperiencia: SExperienciaService, private loginService:LoginService){}




ngOnInit(): void {
  this.loginService.currentUserLoginOn.subscribe(
    {
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
  })
  


  this.cargarExperiencia();
  }

 cargarExperiencia(): void{
  this.sExperiencia.lista().subscribe(data =>{this.experiencia = data;})
} 

delete(id?:number){
  if(id!= undefined){
    this.sExperiencia.delate(id)
    .subscribe(
      data => {
        this.cargarExperiencia();
      }, err=>{
        alert("No se borró la experiencia");
      }
    )
  }
}

}


