import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  baseUrl = 'http://localhost:53429/api/contact/';

  @Input() updateContact : any;

  
  

  constructor(private http : HttpClient, private router : Router) {
    
   }

  ngOnInit(): void {
  }

  update()
  {
    console.log(this.updateContact);       
    this.http.put(this.baseUrl + 'EditContact',this.updateContact).subscribe(response => {
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
