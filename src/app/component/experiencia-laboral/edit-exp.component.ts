import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit{
  expLab : Experiencia  = null;

  constructor(private sExperiencia: SExperienciaService, private activateRouter: ActivatedRoute,
    private route: Router){}


  ngOnInit(): void {
  const id = this.activateRouter.snapshot.params['id'];
  this.sExperiencia.detail(id).subscribe(
    data=>{
      this.expLab = data;
    }, err=>{
      alert("error al modificar experiencia");
      this.route.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activateRouter.snapshot.params['id'];
  this.sExperiencia.update(id, this.expLab).subscribe(
    data =>{
      this.route.navigate(['']);
    }, err=>{
      alert("error al modificar experiencia");
      this.route.navigate(['']);
    }
  )
}
}
