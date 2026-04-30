import { Routes } from '@angular/router';
import { Addcontact } from './addcontact/addcontact';
import { ContactDetails } from './contact-details/contact-details';
import { ShowContacts } from './show-contacts/show-contacts';

export const routes: Routes = [
    { path: '', redirectTo: 'contactlist', pathMatch: 'full' },
    {path:'contactlist',component:ShowContacts},
    {path:'getbyid/:id',component:ContactDetails},
    {path:'addcontact',component:Addcontact}
];
