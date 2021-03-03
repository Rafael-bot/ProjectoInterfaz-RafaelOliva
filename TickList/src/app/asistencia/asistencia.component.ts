import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from '../clases.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, public clases: ClasesService) { }

  uid!:string
  asistencias:any = [];

  ngOnInit(): void {
    this.uid = this.rutaActiva.snapshot.params.uid;
    this.getAlumnos();
  }

  getAlumnos(){
    this.clases.getAsistencia(this.uid).subscribe(snap =>{
      this.asistencias = []
      snap.forEach(a => {
        const alumnoses: any = a.payload.val();
        //this.classs.keys = claseses.key;
        this.asistencias.push(alumnoses);
        //console.log(c);
        //console.log(this.uid)
      })
      //console.log('clase',this.classs)
    })
  }

}
