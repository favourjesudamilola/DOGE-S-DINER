import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: any = FormGroup

  constructor(private fB:   FormBuilder) { }

  ngOnInit(): void {
    this.signup = this.fB.group({
      text : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

}
