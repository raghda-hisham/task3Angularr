import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from "./details/details.component";
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'favMovies',
    component:FavMoviesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
