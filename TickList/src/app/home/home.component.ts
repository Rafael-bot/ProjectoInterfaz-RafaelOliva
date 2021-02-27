import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  alarmLogin(){
    this.toastr.warning('No estas logueado','Login')
  }

}
