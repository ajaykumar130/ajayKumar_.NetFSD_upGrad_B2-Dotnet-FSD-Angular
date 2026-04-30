import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact } from '../Model/Contact';
@Component({
  selector: 'app-contact-list-component',
  imports: [CommonModule],
  templateUrl: './contact-list-component.html',
  styleUrl: './contact-list-component.css',
})
export class ContactListComponent {
  contacts: Contact[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543210"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543211"
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
        phone: "9876543212"
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "9876543213"
    },
    {
        id: 5,
        name: "David Wilson",
        email: "david@example.com",
        phone: "9876543214"
    },
    {
        id: 6,
        name: "Sophia Brown",
        email: "sophia@example.com",
        phone: "9876543215"
    },
    {
        id: 7,
        name: "Daniel Taylor",
        email: "daniel@example.com",
        phone: "9876543216"
    },
    {
        id: 8,
        name: "Olivia Anderson",
        email: "olivia@example.com",
        phone: "9876543217"
    },
    {
        id: 9,
        name: "James Thomas",
        email: "james@example.com",
        phone: "9876543218"
    },
    {
        id: 10,
        name: "Emma Martin",
        email: "emma@example.com",
        phone: "9876543219"
    }
];

}
