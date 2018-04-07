import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionService {

  //private apiUrl = 'https://integrador2018.herokuapp.com/topics'; 
  //private apiUrl = 'http://localhost:3000/topics';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * No vacíos
   */
  verifyUser(user: string, pass: string) {
    localStorage.setItem('session', 'true');
    localStorage.setItem('user', user);
    return true;
  }
}
