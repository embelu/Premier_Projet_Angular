import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus: boolean;
  valueChecked: boolean;
  userLocalStorage: string;
  mdpLocalStorage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;

    if (localStorage.getItem('user') != undefined) {
      this.valueChecked = true;
      this.userLocalStorage = localStorage.getItem('user');
      this.mdpLocalStorage = localStorage.getItem('mdp');
    }
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

  onSubmit(form: NgForm) {
    if (this.valueChecked === true) {
      localStorage.setItem('user', this.userLocalStorage);
      localStorage.setItem('mdp', this.mdpLocalStorage);
    }
  }
}
