import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { Contact } from './models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  contacts: Contact[] = [];
  contactIdCounter = 1;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      isActive: [false]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        contactId: this.contactIdCounter++,
        ...this.contactForm.value
      };

      this.contacts.push(newContact);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}