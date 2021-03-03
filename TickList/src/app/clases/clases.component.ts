import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ClasesService } from '../clases.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  constructor(public clases: ClasesService, public auth: AuthService, private rutaActiva: ActivatedRoute){ }

  classs:any = [];
  nombre!:string;
  uid!:any
  //@Input() user!: string; 

  ngOnInit(): void {
    this.uid = this.rutaActiva.snapshot.params.uid;
    this.getClases();
  }

  getClases(){
    this.clases.getClases(this.uid).subscribe(snap =>{
      this.classs = []
      snap.forEach(c => {
        const claseses: any = c.payload.val();
        //this.classs.keys = claseses.key;
        this.classs.push(claseses);
        //console.log(c);
        //console.log(this.uid)
      })
      //console.log('clase',this.classs)
    })
  }

  agregarClase(user:any){
    this.clases.añadirClase(this.nombre,user)
    //console.log(user)
  }

  eliminarClase(nombre:string){
    this.clases.deleteClases(this.uid,nombre);
  }

}