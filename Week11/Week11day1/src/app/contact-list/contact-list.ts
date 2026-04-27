import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactListComponent {

  contacts: Contact[] = [
    { contactId: 1, name: 'Ajay', email: 'ajay@gmail.com', phone: '9876543210', isActive: true },
    { contactId: 2, name: 'Ravi', email: 'ravi@gmail.com', phone: '9123456780', isActive: false },
    { contactId: 3, name: 'kumar', email: 'kumar@gmail.com', phone: '9988776655', isActive: true }
  ];

}