import {CanActivate, Router} from '@angular/router'
import {Injectable} from '@angular/core'


@Injectable()
export class LoginActivateRouter implements CanActivate {

   constructor(private router: Router) {
    console.log(" in LoginActivateRouter =>");
   
   }
   
   canActivate() {
        
    this.router.navigate(['/404'])
    return true;
     
   }
   
}