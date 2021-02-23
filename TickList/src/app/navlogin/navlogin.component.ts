import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navlogin',
  templateUrl: './navlogin.component.html',
  styleUrls: ['./navlogin.component.scss']
})
export class NavloginComponent implements OnInit {

  constructor(public auth: AuthService){}

  ngOnInit(): void {
  }

}
