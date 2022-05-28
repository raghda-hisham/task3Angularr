import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any={};
  data:any={};
  comment:any="";
  postComments:any=[];
  getComments:any="";
  img_url:any="";
  divStyle:any;
  constructor(public _router:ActivatedRoute , private _service:MovieServiceService) {
  }

  ngOnInit(): void {
    this.id=this._router.snapshot.params[`id`];
    // this.postComments = localStorage.getItem(JSON.parse('comments'));
    if(localStorage.getItem('comment') === "" || localStorage.getItem('comment') ==null ){
      this.postComments=["gi","hh"];
      // alert(this.postComments)
    }else{
      this.getComments=localStorage.getItem('comment');
      this.postComments = JSON.parse(this.getComments);
      console.log(localStorage.getItem('comment'))
    }
    this.getOneId();
  }
  getOneId(){
    this._service.getOne(this.id).subscribe((res)=>{
       this.data=res;
       this.img_url="https://image.tmdb.org/t/p/w500/"+this.data.poster_path;
    })
  }
  post(){
    if(this.comment!==""){
    this.postComments.push(this.comment);
    this.comment="";
    localStorage.setItem("comments",JSON.stringify(this.postComments));
    }
  }
  delete(index:number){
     this.postComments.splice(index,1);
     localStorage.setItem("comments",JSON.stringify(this.postComments));
  }
}
