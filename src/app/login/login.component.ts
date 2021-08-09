import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from '../_service/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  disabledBtn=false;
  
  constructor( private authService: AuthService,private router: Router,private fb: FormBuilder) { }
  
  createForms() {
    this.form = this.fb.group({
      Email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      Password: new FormControl(
        '',
        Validators.compose([Validators.minLength(8), Validators.required])
      ),
    });
  }

  ngOnInit(): void {
    this.createForms();
  }

  onSignIn(form){
    
    this.authService.login(form).subscribe(
      (res) => {

        sessionStorage.setItem('token', res.token);
        console.log(res.token)
       
        this.router.navigate(['/countries']);
      },
      (err) => {
      

    
      },
      () => {}
    );
  }

}
