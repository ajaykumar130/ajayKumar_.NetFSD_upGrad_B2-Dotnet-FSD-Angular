import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactListComponent } from '../contact-list-component/contact-list-component';
import { Contact } from '../Model/Contact';
@Component({
  selector: 'app-contactdetail-component',
  imports: [ContactListComponent],
  templateUrl: './contactdetail-component.html',
  styleUrl: './contactdetail-component.css',
})
export class ContactdetailComponent {

      UserContact:Contact={
          id:0,
          name:"",
          email:"vasu@gmail.com",
          phone:"987456"
      }
      
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe(params=>{
        this.UserContact.id=Number(params.get('id'));
        this.UserContact.name=params.get('name')??'Guest';
    });
}
}
