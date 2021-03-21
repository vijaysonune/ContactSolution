import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  baseUrl = 'http://localhost:53429/api/contact/';
  Contacts : any = {};
  contact: any;

  editToggle: boolean = false;
  deleteToggle: boolean = false;
  addToggle : boolean= false;



  constructor (private http : HttpClient, private router : Router) {
    this.getList();
   }

  ngOnInit(): void {
  }

  getList()
  {
    this.http.get(this.baseUrl +'List').subscribe( response  => {
      console.log(response);
      this.Contacts= response;
    }, error =>{
      console.log(error);
    });
  }

  delContact(contact : any)
  {
    this.contact= contact;
    this.deleteToggle=true;
  }
  edit(contact : any)
  {
    this.contact= contact;
    this.editToggle=true;
  } 
  AddContact()
  {
    this.addToggle=true;
  }

}
