import { Component, inject } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);

  usuario: Usuario = new Usuario();


  logar(){
    if(this.usuario.login == "admin" && this.usuario.senha =="admin"){
      //libera a rtora
      this.roteador.navigate(['/admin/pessoas']);
    }
    else{
      alert('calma la amigao ele nem encostou nela.');
    }
  }

}
