import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetapiService } from 'src/app/servicios/getapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users:any;
  user:any;
  comments:any;
  comment:any;

  constructor(private api: GetapiService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    // Lógica de inicio de sesión
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data)=>{
      this.users = data;
    })
  }

  ionViewWillEnter(){
    this.getUsuarios();
  }

}