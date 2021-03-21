import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseUrl = 'http://localhost:53429/api/contact/List';
  Contacts : any = {};

  constructor (private http : HttpClient) { }

  ngOnInit(): void {
  }

  getList()
  {
    this.http.get(this.baseUrl).subscribe( response  => {
      console.log(response);
      this.Contacts= response;
    })
  }

}
