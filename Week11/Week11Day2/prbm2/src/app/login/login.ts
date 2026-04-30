import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { authState } from '../../auth-state';
import { User } from '../Models/User';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router:Router){}
  error:string="";
  user:User={
    id:"",
    password:""
  }

  validateUser:User={
    id:"vasu@gmail.com",
    password:"1234"
  }

  Submit(){
    if(this.user.id==this.validateUser.id && this.user.password==this.validateUser.password){
        authState.isLoggedIn=true;
        this.router.navigate(['/user',this.user.id]);
    }
    else{
      this.error='Invalid Credentials';
    }
  }

}
