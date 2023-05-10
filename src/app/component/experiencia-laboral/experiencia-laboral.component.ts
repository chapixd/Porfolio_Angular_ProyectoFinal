import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
experiencia: Experiencia[] = [];


constructor(private sExperiencia: SExperienciaService){}




ngOnInit(): void {
 
  
  }

 cargarExperiencia(): void{
  this.sExperiencia.lista().subscribe(data =>{this.experiencia = data;})
} 

delete(id?:number){
  if(id!= undefined){
    this.sExperiencia.delate(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err=>{
        alert("No se borró la experiencia");
      }
    )
  }
}

}


