import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  name: string;
  passwordValue: string;
  height: number;

  constructor(private router: Router) {
    this.registerForm = new FormGroup({

      name: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z1-9-]*'),
      ])),

      lastname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z1-9]*'),
      ])),

      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),

      rpassword: new FormControl("", Validators.compose([
        Validators.required,
      ])),

    }, passwordMatchValidator);

    function passwordMatchValidator(g: FormGroup) {
      return g.get('password').value === g.get('rpassword').value
        ? null : { 'mismatch': true };
    }
  }


  ngOnInit() {
    this.height = window.innerHeight;
  }

  register(form: NgForm) {
    console.log(form.value);
  }

  login() {
    this.router.navigate(['/login']);
  }

  containsName(name:string, lastname:string){
    this.passwordValue = this.registerForm.get('password').value;
    if(name.length > 0 && lastname.length === 0)
      return this.passwordValue.match(name);
    else if(lastname.length > 0 && name.length === 0)
      return this.passwordValue.match(lastname);
    else if(lastname.length > 0 && name.length > 0)
      return this.passwordValue.match(lastname) || this.passwordValue.match(name);
    else
      return false;
  }
}
