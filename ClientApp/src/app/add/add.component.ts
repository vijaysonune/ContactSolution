import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  baseUrl = 'http://localhost:53429/api/contact/';

  addContact: any = {};

  
  

  constructor(private http : HttpClient, private router : Router) {
    
   }

  ngOnInit(): void {
  }

  add()
  {
    console.log(this.addContact);       
    this.http.post(this.baseUrl + 'AddContactAsync',this.addContact).subscribe(response => {
      console.log(response);  
      this.router.navigateByUrl(''); 

    }, error =>{
      console.log(error); 
    });

  }

  cancel(){
    this.router.navigateByUrl('');
  }

}
