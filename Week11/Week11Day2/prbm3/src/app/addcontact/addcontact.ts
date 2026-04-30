import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../Contact.Service/Contact.service';
import { Contact } from '../Models/Contact';
@Component({
  selector: 'app-addcontact',
  imports: [CommonModule,FormsModule],
  templateUrl: './addcontact.html',
  styleUrl: './addcontact.css',
})
export class Addcontact {

  contact:Contact={
    id:0,
    name:'',
    email:'',
    phone:''
  }

  constructor(private service:ContactService,private router:Router){}

  OnSubmit(){
    this.service.addcontcat(this.contact);
    this.router.navigate(['/contactlist']);
  }


}
