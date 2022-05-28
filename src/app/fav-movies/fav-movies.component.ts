import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {

  constructor() { }

  dataFav:any=[];
  data:any=[]

  ngOnInit(): void {


    this.data=localStorage.getItem('fav')
    this.dataFav=JSON.parse(this.data)

  }

}
