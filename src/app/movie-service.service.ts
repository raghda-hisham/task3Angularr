import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find, observable, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
    id2:number=0;
  constructor(public _Http:HttpClient , public _activated:ActivatedRoute) { }
  find(movies:string):Observable<any>
  {
    // alert(movies);
    return this._Http.get(`https://api.themoviedb.org/3/movie/`+movies+`?api_key=b38d1324d79127ba86f8309e541bffd4`)
  }
  getOne(id:number):Observable<any>{
    return this._Http.get(`https://api.themoviedb.org/3/movie/`+id+`?api_key=b38d1324d79127ba86f8309e541bffd4`);
  }

}
