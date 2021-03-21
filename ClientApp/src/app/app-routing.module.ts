import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'List', component : ListComponent},
  {path : 'ContactUs', component : ContactusComponent},
  {path : 'About', component : AboutComponent},
  {path : '**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
