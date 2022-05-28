import { Injectable } from '@angular/core';
import { Auth, authState, updateProfile } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import {from, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$=authState(this.auth);
  constructor(private auth:Auth) { }
  login(username:string,password:string){
   return from(signInWithEmailAndPassword(this.auth,username,password))
  }
  logout(){
    return from(this.auth.signOut());
  }
  signUp(name:string,password:string,email:string){
     return from(createUserWithEmailAndPassword(this.auth,email,password))
     .pipe(switchMap(({user})=> updateProfile(user,{displayName:name})))
  }
}


// function form(arg0: Promise<import("@firebase/auth").UserCredential>) {
//   throw new Error('Function not implemented.');
// }

