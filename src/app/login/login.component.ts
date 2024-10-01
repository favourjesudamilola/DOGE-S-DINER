import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  loginService: any;

  constructor(private fB : FormBuilder, loginService: LoginService) { }

  ngOnInit(): void {
    //this.login = this.fB.group({
      //email : new FormControl('', [Validators.required, Validators.email]),
      //password : new FormControl('', [Validators.required, Validators.minLength(8)])
    //})
      this.login = this.fB.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
    
  }

  handleLogin(): void {
    const credentials = this.login.value;
    this.loginService.postLoginApi(credentials).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Here you should navigate to the next page or perform other actions
        localStorage.setItem('isAuthenticated', 'true');
      },

      (error: any) => {
        console.error('Login failed:', error);
        // Handle error (e.g., show error message to user)
      }
    );
  }
  

 // handleLogin(): void{
   // localStorage.setItem('isAuthenticated', 'true')
  //}
}
