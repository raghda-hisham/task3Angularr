import { Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Select } from './optionsMovies'
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() redirect:EventEmitter<any> = new EventEmitter();
    public sort="";
    listOfImages:any=[];
    data:any=[];
    movies:string='';
    select:Select[] |any;
    selectedVal:any;
    modifedtext:any="top_rated";
    favMovie:Array<any>=[];
    indexOfFav:number=0;
    dataLocalStorage:any=[];
    x:any;

  constructor(public _service:MovieServiceService, private authService:AuthenticationService) {
  }
  ngOnInit(): void {
  this.select=[
    {id:1,name:"top_rated"},
    {id:2 , name:"upcoming"},
    {id:3 , name:"popular"}
  ]
      this.dataLocalStorage=localStorage.getItem('fav')
      this.dataLocalStorage=JSON.parse(this.dataLocalStorage);
      // console.log(this.getSimiler())
      this.getData();
       this.getSimiler()

  }

  getData(){
    // this.onSelectedValue;
    this._service.find(this.modifedtext).subscribe((res)=>{
      this.data=res.results;
      // console.log(this.getSimiler())
    })
  }
  onSelectedValue(val:any){
    this.modifedtext= val;
    this.getData();
  }


  onFavClick(i:number,id:number):void{
  console.log(this.data)
    this.data.forEach((item:any)=>{
      if(item.id === id){
        item.adult= !item.adult;

        if(item.adult==true){
            this.favMovie.push(item);
            localStorage.setItem('fav',  JSON.stringify(this.favMovie));
        }
        else{
            this.removeFav(item)
        }
      }
      }
    )
  }


  removeFav(item:any){
    this.favMovie.filter((el)=> {
      if(item.id ==el.id){
          this.indexOfFav=this.favMovie.indexOf(el)
          this.favMovie.splice(this.indexOfFav,1)
          localStorage.setItem("fav",JSON.stringify(this.favMovie));

      }
 })
  }


  getSimiler(){
    console.log(this.data)
   return  this.dataLocalStorage.reduce((prev:any,curr:any)=>{
       for(let i=0 ; this.data.length ;i++){
         if(this.data[i]===curr.id){
           curr.adult=this.data[i].adult
           return prev.concat(curr)
         }
       }
     },[])

  }

}

