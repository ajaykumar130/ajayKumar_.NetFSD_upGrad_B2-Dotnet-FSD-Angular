import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}