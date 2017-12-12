import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable()
export class AuthService {
  currentUser : IUser;
  
  loginUser(userName: string, password: string) {
   this.currentUser = {
     id: 1,
     userName : userName,
     firstName: 'asifshaik',
     lastName: 'shaik'
   }
  
  }
  
  isAuthenticated() {
//    console.log(' !!this.currentUser => ',!!this.currentUser);
    return !!this.currentUser;
  }
  
  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;  
  }
  
  


}