import { Component } from '@angular/core';
import { LoginModel } from '../login-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel=new LoginModel("","");

  onLogin(){
    console.log(this.loginModel);
  }
}
