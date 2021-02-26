import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  contrase = '';
  authUser = null;

  constructor(public auth: AngularFireAuth) { }

  user = this.auth.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }))

  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.contrase)
    .then( user => {
      console.log('Logado como ', user);
    })    
    .catch( error =>{
      console.log('Error en el login!!!');
    })
  }

  logout() {
    console.log('Logout!!!')
    this.auth.signOut();
  }

}
