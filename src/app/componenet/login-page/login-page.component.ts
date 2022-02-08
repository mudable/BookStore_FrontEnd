import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from 'src/app/Service/login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  data ={ emailId:'',
password:''

}
  constructor(private loginservice:LoginPageService,private router:Router) { }

  ngOnInit(): void {

  }
   formGroup  = new FormGroup({
      emailId:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
  
  })
  onSubmit(){
    if((this.data.emailId!='' && this.data.password!='') && (this.data.emailId!=null && this.data.password!= null)){
      console.log("We have to submit the form to server");
      // to generate token 
     var token= this.loginservice.loginUser(this.data).subscribe(
      
        (response:any)=>{
          console.log(response)
          this.loginservice.login(response.data)
          
          this.router.navigate(["/homepage"])

        },
       (        errors: any)=>{
        console.log(errors);

        }
      )
     
     
      }
    }
  }
      
