import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  
  token:string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    localStorage.setItem('SessionUser',this .token);
  }

  login(){
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password 
      });

      if(user){
        
        alert('Login Succesful');
        this.token='sus1';
        localStorage.setItem('SessionUser',this .token)
        this.loginForm.reset()
        this.router.navigate(['/pages'])
      }
      // }else{
      //   alert("user not found");
      //   this.router.navigate(['/log-in'])
      // }
    },err=>{
      alert("Something went wrong")
    })

  }

}
