import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { logging } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {  }

  user = this.auth.authState.pipe ( map(authState => {
    console.log('authState: ',authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }) )

  login(){
    console.log('Logueado!!!')
  }

  glogin(){
    console.log('Logueado con google!!!')
  }

  logout(){
    console.log('Logut!!!')
  }

}
