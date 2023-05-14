import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { of } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';
import { LoginRequest } from 'src/app/service/loginRequest';
import { User } from 'src/app/service/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userLoginOn:boolean=false;
  userData?: User;

  loginError:string="";
  loginForm=this.formBuilder.group(
    {
      email:['',[Validators.required,Validators.email]],
      password:['', Validators.required],
    }
  )
 
  constructor(private formBuilder: FormBuilder, private router:Router, private loginServiece: LoginService ){

  }
  ngOnInit(): void { 
    
    
    }

    get email(){
      return this.loginForm.controls.email;
    }
    get password(){
      return this.loginForm.controls.password;
    }

    login(){
      if(this.loginForm.valid){
        this.loginServiece.login(this.loginForm.value as LoginRequest).subscribe({
          next:(userData)=>{
            console.log(userData);
          },
          error:(errorData)=>{
            console.log(errorData);
            this.loginError=errorData;
          },
          complete:()=>{
            alert("Loguado con exito");
            this.router.navigateByUrl('');
        this.loginForm.reset();
          }
        })
        
      }
      else{
        this.loginForm.markAllAsTouched();
        alert("error");
      }
    }

    }
    
  

  

  





