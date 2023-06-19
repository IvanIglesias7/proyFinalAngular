import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  errorLogin: string | undefined;


  constructor(
    private usuario: UsuarioService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorLogin = ''; 
  
    this.usuario.login(this.formLogin.value)
      .then(response => {
        console.log(response);
       
        this.router.navigate(['/articulos']);
      })
      .catch(error => {
        console.log(error);
        
        this.errorLogin = 'Error en el inicio de sesión. Por favor, verifica tus credenciales.';
      });
  }
  
}