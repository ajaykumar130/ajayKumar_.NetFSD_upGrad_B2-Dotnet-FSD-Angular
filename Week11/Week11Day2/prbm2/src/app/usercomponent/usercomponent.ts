import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Models/User';
import { Login } from '../login/login';
@Component({
  selector: 'app-usercomponent',
  imports: [Login],
  templateUrl: './usercomponent.html',
  styleUrl: './usercomponent.css',
})
export class Usercomponent {

  constructor(private router:ActivatedRoute){}
  user:User={
    id:"",
    password:""
  }

  ngOnInit(){
    this.router.paramMap.subscribe(params=>
    {
      this.user.id=params.get('id') ?? 'Guest';
    }
    );
  }

}
