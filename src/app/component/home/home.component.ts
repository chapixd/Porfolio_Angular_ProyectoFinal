import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/service/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userLoginOn:boolean=false;
constructor(private loginService:LoginService){}


  /*ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }*/


ngOnInit(): void {
  this.loginService.currentUserLoginOn.subscribe({
    next:(userLoginOn)=>{
      this.userLoginOn=userLoginOn;
    }
  });
  this.loginService.currentUserData.subscribe({
    next:(userData)=>{
      this,userData=userData;
    }
  })
}


}


