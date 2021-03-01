import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(public db: AngularFireDatabase, private toastr: ToastrService, private router: Router) { }

  añadirClase(clase: string, user: any) {
    console.log(clase, user.email)
    const path = `clases/${user.uid}/${clase}`
    const c = {
      nombre: clase,
      profe: user.email
    }
    this.db.object(path).set(c)
      .then(clase=>{
        this.router.navigate(['/clases/', '1']);
      })
      .catch(error => console.log(error));
  }

  getClases(uid:string){
    const path = `clases/${uid}`
    console.log(this.db.list(path).snapshotChanges())
    return this.db.list(path).snapshotChanges();
  }

}
