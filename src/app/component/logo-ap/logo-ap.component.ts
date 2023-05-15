import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  userLoginOn:boolean=false;
  constructor(private loginService:LoginService){

  }

  LogOut():void{
    window.location.reload();
    alert("session finalizada");
  }



ngOnInit(): void {
  this.loginService.currentUserLoginOn.subscribe(
    {
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
  })

}




}
