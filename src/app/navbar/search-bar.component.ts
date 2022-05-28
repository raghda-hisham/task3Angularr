import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(public authService:AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }
  user$=this.authService.currentUser$;
   onSubmit(form: NgForm){
     this.router.navigate(["search",form.value.search]);
   }

  logout( ){
    this.authService.logout().subscribe(()=>{
           this.router.navigate(['']);
    })
  }

}
