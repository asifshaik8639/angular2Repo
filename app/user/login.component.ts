import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl : 'app/user/login.component.html',
  styles: [`
    em{
    float: right; color: #E05C65; padding-left:10px;
    }
    
  `]
})
export class LoginComponent { 

    constructor(private authService: AuthService, private router: Router) {
    
    }

    login(formvalues) {
      console.log('formvalues in login component = > ',formvalues);
     this.authService.loginUser(formvalues.userName, formvalues.password);
      this.router.navigate(['events']);
    }
    
    cancel() {
        this.router.navigate(['events']);
    }

}