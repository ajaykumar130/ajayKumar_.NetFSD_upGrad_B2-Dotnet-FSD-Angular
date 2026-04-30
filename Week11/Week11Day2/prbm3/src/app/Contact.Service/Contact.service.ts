import { Injectable } from "@angular/core";
import { Contact } from "../Models/Contact";

@Injectable({
    providedIn:'root'
})
export class ContactService{

    private contacts:Contact[]=[
        {id:1,name:"vasu",email:"vasu@gmail.com",phone:"987654321"},
        {id:2,name:"sunny",email:"sunny@gmail.com",phone:"987654321"},
        {id:3,name:"Ali",email:"ali@gmail.com",phone:"987654321"},
        {id:4,name:"Sanjay",email:"sanjay@gmail.com",phone:"987654321"}
    ];

    getAll():Contact[]{
        return this.contacts;
    }

    getById(id:number):Contact | undefined{
        return this.contacts.find(p=>p.id==id);
    }

    addcontcat(contact:Contact){
        this.contacts.push(contact);
    }



}