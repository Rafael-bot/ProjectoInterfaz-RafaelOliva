import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  email!:string;
  password!:string;

  register(){
    this.auth.register(this.email,this.password);
  }

}
