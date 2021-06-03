import { AuthComponent } from './../auth/auth.component';
import { TestBed, async, inject, tick, fakeAsync, flush } from '@angular/core/testing';
import { AuthService } from './auth.service';


describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService);
  });


  afterEach(() => {


  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });


  it('isAuth should be false when call signOut()', () => {
    authService.signOut();
    expect(authService.isAuth).toBeFalse();
  });


  it("isAuth should be true after the two seconds when call signIn()", fakeAsync(() => {

    authService.signIn();
    tick(2001);
    expect(authService.isAuth).toBeTrue();
  }));


  it("isAuth should be true less two seconds when call signIn()", fakeAsync(() => {

    authService.signIn();
    tick(1999);
    expect(authService.isAuth).toBeFalse();
    flush();
  }));



});
