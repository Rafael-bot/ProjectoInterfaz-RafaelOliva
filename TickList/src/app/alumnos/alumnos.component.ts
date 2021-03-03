import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from '../clases.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, public clases: ClasesService) { }

  uid!:string;
  nombreClase!:string;
  nombreAlumno!:string;
  alumnos:any = [];
  asistencia:number = 0;

  ngOnInit(): void {
    this.uid = this.rutaActiva.snapshot.params.uid;
    this.nombreClase = this.rutaActiva.snapshot.params.clase;
    this.getAlumnos()
  }

  agregarAlumno(){
    this.clases.añadirAlumno(this.nombreClase, this.uid, this.nombreAlumno);
    //console.log(user)
  }

  getAlumnos(){
    this.clases.getAlumnos(this.uid, this.nombreClase).subscribe(snap =>{
      this.alumnos = []
      snap.forEach(a => {
        const alumnoses: any = a.payload.val();
        //this.classs.keys = claseses.key;
        this.alumnos.push(alumnoses);
        //console.log(c);
        //console.log(this.uid)
      })
      //console.log('clase',this.classs)
    })
  }

  eliminarAlumno(nombre:string){
    this.clases.deleteAlumno(this.uid,this.nombreClase,nombre);
  }

  haVenido(){
    this.asistencia++;
  }
  
  enviarAsistencias(){
    //console.log(this.asistencia)
    const dateBody = new Date().toLocaleString();
    const dateRuta = new Date();
    this.clases.añadirAsistencia(this.uid,this.nombreClase,this.asistencia, dateBody, dateRuta);
  }

}
