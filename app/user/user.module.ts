import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {userRoutes} from './user.routes'
import {ProfileComponent} from './profile.component'
import {LoginComponent} from './login.component'
import {SearchComponent} from './search.component'
import {LoginActivateRouter} from './login.activator.service'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [ProfileComponent, LoginComponent, SearchComponent],
  providers:[]

})
export class UserModule {

}