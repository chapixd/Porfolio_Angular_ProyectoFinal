import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
nombreEdu: string= '';
descripcionEdu: string='';

constructor(private educacionS: EducacionService, private router: Router){}

ngOnInit():void{}

onCreate(): void{
  const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
  this.educacionS.save(educacion)
  .subscribe(
    {
       next:  data =>{
              alert("Educacion añadida");
              this.router.navigateByUrl('');
              
            },
            error:err=>{
      alert("fallo");
      this.router.navigateByUrl('');
    }
    })
  
  }

}


