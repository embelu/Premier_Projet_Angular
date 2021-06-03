
import { AuthService } from './../services/auth.service';
import { inject, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { DebugElement } from '@angular/core';
/*
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { IAuth } from '../authInterface';
import { AuthComponent } from './auth.component';
*/


describe('AuthComponent', () => {
  let component: AuthComponent
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      /*providers: [authService]*/
    });

    authService = TestBed.inject(AuthService);

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

    authService = TestBed.get(AuthService);



  });

  it('test lva', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(authService, 'signIn').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick();
    expect(component.authStatus).toBeTruthy();
  }));

})
