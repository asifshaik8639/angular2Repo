import {ProfileComponent} from './profile.component'
import {LoginComponent} from './login.component'
import {SearchComponent} from './search.component'
import {LoginActivateRouter} from './login.activator.service'


export const userRoutes = [
 {
   path: 'profile', component: ProfileComponent
 },
 {
   path: 'login', component: LoginComponent
 },
 {
   path: 'search', component: SearchComponent
 }
];