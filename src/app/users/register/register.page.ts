import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showPassword: boolean = false;
  nombre: string = '';
  correo: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    // Lógica de registro
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre}Correo: ${this.correo}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
