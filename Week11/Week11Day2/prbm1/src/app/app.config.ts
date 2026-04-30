import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact-component/addcontact-component';
import { ContactListComponent } from './contact-list-component/contact-list-component';
import { ContactdetailComponent } from './contactdetail-component/contactdetail-component';
const MyRoutes:Routes=[
  {path:'',component:AddcontactComponent},
  {path:'contactlist',component:ContactListComponent},
  {path:'Contact/contactlist/:id/:name',component:ContactdetailComponent}
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(MyRoutes)
  ]
};
