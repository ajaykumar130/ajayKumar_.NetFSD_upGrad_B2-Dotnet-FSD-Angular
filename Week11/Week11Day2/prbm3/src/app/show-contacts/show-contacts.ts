import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactService } from '../Contact.Service/Contact.service';
import { Contact } from '../Models/Contact';
@Component({
  selector: 'app-show-contacts',
  imports: [CommonModule,RouterModule],
  templateUrl: './show-contacts.html',
  styleUrl: './show-contacts.css',
})
export class ShowContacts {
  contacts:Contact[];
  constructor(private service:ContactService){
    this.contacts=service.getAll();
  }
}
