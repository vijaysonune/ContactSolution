import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  baseUrl = 'http://localhost:53429/api/contact/';

  @Input() deleteContact : any;

  
  

  constructor(private http : HttpClient, private router : Router) {
    
   }

  ngOnInit(): void {
  }

  delete()
  {
    this.http.delete(this.baseUrl+'DeleteContact/'+ this.deleteContact.Id).subscribe(response => {
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
