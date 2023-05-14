import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
  educacion: Educacion=null;
  userLoginOn:boolean=false;

  constructor(private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educacionS.detail(id).subscribe(
        data=>{
          this.educacion = data;
        }, err=>{
          alert("error al modificar educacion");
          this.router.navigateByUrl('');
        }
      )
    }

    onUpdate():void{
      const id = this.activatedRouter.snapshot.params['id'];
  this.educacionS.update(id, this.educacion).subscribe(
    data =>{
      this.router.navigateByUrl('');
    }, err=>{
      alert("error al modificar educacion");
      this.router.navigateByUrl('');
    }
  )
}
    }

