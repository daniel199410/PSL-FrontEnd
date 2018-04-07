import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  height: number;
  loginForm;

  constructor(private router: Router, private sessionService: SessionService) { 
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.compose([
        Validators.required,
      ])),      
      password: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    })
  }

  ngOnInit() {
    this.height = window.innerHeight;
  }

  login(form: NgForm) {
    if (this.sessionService.verifyUser(form.value.username, form.value.password)) {
      this.router.navigate(['/topicsToBeOpen']);
    }   
  }

  register(){
    this.router.navigate(['/register']);
  }
}