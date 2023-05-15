import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
userLoginOn:boolean=false;
educacion: Educacion[]=[];
  constructor(private educacionS: EducacionService, private loginService:LoginService){}


  ngOnInit(): void{
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn)=>{
          this.userLoginOn=userLoginOn;
        }
    })



      this.cargarEducacion();
  }
    

  
cargarEducacion(): void{
  this.educacionS.lista().subscribe(
    data =>{
      this.educacion=data;
    }
  )
}

delete(id?:number){
  if(id != undefined){
    this.educacionS.delate(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err=>{
        alert("No se borró la experiencia");
      }
    )
  }
}
}
