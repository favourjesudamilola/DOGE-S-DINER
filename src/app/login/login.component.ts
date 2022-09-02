import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup
  constructor(private fB : FormBuilder) { }

  ngOnInit(): void {
    this.login = this.fB.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  handleLogin(): void{
    localStorage.setItem('isAuthenticated', 'true')
  }
}
