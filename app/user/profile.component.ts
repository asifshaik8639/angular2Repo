import { Component, OnInit, Inject } from '@angular/core'
import {AuthService} from './auth.service'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {TOASTR_TOKEN, Toastr} from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {float: right; color: green; padding-left: 10px;}
    
     .error input {
        background-color: red;
     }     
     .error ::-webkit-input-placeholder {color: #999;}
     .error :ms-input-placeholder{color: #999;}
     .error ::-moz-placeholder{color: #999;}
     .error :-moz-placeholder{color: #999;}
  `]
})

export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  
  constructor(private authService: AuthService, private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  
  }
  
  ngOnInit() {
    console.log('firstName got as => ',this.authService.currentUser.firstName);
    this.firstName = new FormControl(this.authService.currentUser.firstName,
                                    [Validators.required, Validators.pattern('[a-zA-Z].*') ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    
    this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
    })
  }
  
  cancel() {
    console.log('cancel clicked ');
    this.router.navigate(['events']);
  }
  
  saveProfile(formValues) {
  
   if(this.profileForm.valid) {
        console.log(" saveProfile => ",formValues);
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName); 
        this.router.navigate(['events']);
        this.toastr.success('Profile saved');
   }
    
  }
  
  validateFirstName() {
    return (this.firstName.valid || this.firstName.untouched);  
  }
  
  validateLastName() {
    return (this.lastName.valid || this.lastName.untouched);  
  }
  
 
       
}