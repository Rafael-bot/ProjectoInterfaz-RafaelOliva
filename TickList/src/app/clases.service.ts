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
        this.router.navigate(['/clases/',user.uid,clase]);
      })
      .catch(error => console.log(error));
  }

  añadirAlumno(clase: string, uid: string,alumno:string ) {
    const path = `clases/${uid}/${clase}/alumnos/${alumno}`
    const a = {
      nombre: alumno,
    }
    this.db.object(path).set(a)
      .catch(error => console.log(error));
  }


  getClases(uid:string){
    const path = `clases/${uid}`
    //console.log(this.db.list(path).snapshotChanges())
    return this.db.list(path).snapshotChanges();
  }

  getAlumnos(uid:string, clase:string){
    const path = `clases/${uid}/${clase}/alumnos`
    //console.log(this.db.list(path).snapshotChanges())
    return this.db.list(path).snapshotChanges();
  }

  deleteClases(uid:string, nombre:string){
    const path = `clases/${uid}/${nombre}`
    return this.db.object(path).remove();
  }

  deleteAlumno(uid:string, clase:string, alumno:string){
    const path = `clases/${uid}/${clase}/alumnos/${alumno}`
    return this.db.object(path).remove();
  }

}
