import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ]
})
export class LoginComponent {

  public user : User;

  constructor(private router: Router,private authenticationService: AuthenticationService,) {
  	this.user = new User();

    if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.authenticationService.login(this.user.username, this.user.password).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/home']);
        } else {
          alert('Wrong username password');
        }
        
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('Enter user name and password');
  	}
  }

}
