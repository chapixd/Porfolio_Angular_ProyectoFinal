import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
educacion: Educacion[]=[];
userLoginOn:boolean=false;
  constructor(private educacionS: EducacionService){}


  ngOnInit(): void{
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
