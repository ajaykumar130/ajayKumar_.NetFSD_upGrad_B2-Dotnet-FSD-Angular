import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../Contact.Service/Contact.service';
import { Contact } from '../Models/Contact';

@Component({
  selector: 'app-contact-details',
  imports: [],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.css',
})
export class ContactDetails {

  constructor(private service:ContactService,private router:ActivatedRoute){
  }
  contact:Contact | undefined;
  ngOnInit(){
    this.router.paramMap.subscribe(params=>{
      const id=Number(params.get('id'));
      this.contact=this.service.getById(id);
    });
  }
}
