import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { ClasesService } from './clases.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  contrase = '';
  authUser = null;

  constructor(public auth: AngularFireAuth, private toastr: ToastrService, private router: Router) { }

  user = this.auth.authState.pipe(map(authState => {
    //console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }))

  login(){
    this.auth.signInWithEmailAndPassword(this.email, this.contrase)
    .then( user => {
      this.toastr.success('Login realizado como '+user.user?.email,'LOGIN')
      this.router.navigate(['/']);
    })
    .catch( error =>{
      if(error.code==='auth/wrong-password'){
        this.toastr.error('La contraseña es incorrecta','ERRO LOGIN')
      } else if(error.code==='auth/user-not-found'){
        this.toastr.error('El email es invalido','ERROR LOGIN')
      } 
    });
    
  }

  logout() {
    this.auth.signOut()
    this.toastr.success('Logout realizado como ','LOG OUT')
  }

}
