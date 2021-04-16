import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoginService, AuthResponseData } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  isLoading = false;
  error: string = null;

  constructor(private authService: LoginService, private router: Router) {}

  

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

      authObs = this.authService.login(email, password);
    

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/weddings']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}




/*

  onSubmit(form: NgForm) {
    this.submited = true;
    this.username = this.loginForm.value.user;
    this.password = this.loginForm.value.pass;
    this.loginService.login(this.username, this.password);
    form.reset();
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;

  }*/