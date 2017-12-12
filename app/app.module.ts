import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import {NavbarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {TOASTR_TOKEN, Toastr} from './common/toastr.service'
import {JQ_TOKEN} from './common/jQuery.service'
import {VoterService} from './events/event-details/voter.service'

import {EventDetailsComponent} from './events/event-details/event-details.component' 
import {CreateEventComponent} from './events/create-event.component'
import {CreateSessionComponent} from './events/event-details/create-session.component'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {AuthService} from './user/auth.service'
import {EventListResolver} from './events/event-list-resolver.service'
import {SessionsListComponent} from './events/event-details/sessions-list.component'
import {CollapsableComponent} from './common/collapsable-well.component'
import {DurationPipe} from './events/shared/duration.pipe'
import {SimpleModalComponent} from './common/simpleModal.component';
import {ModalTriggerDirective} from './common/modalTrigger.directive';
import {UpvoteComponent} from './events/event-details/upvote.component';
import {LocationValidator} from './events/validate.location.directive';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component, CreateSessionComponent, SessionsListComponent, CollapsableComponent, DurationPipe,
  SimpleModalComponent,
  ModalTriggerDirective,
  UpvoteComponent,
  LocationValidator],
  providers: [
          EventService, 
          {provide: TOASTR_TOKEN, useValue: toastr},
          {provide: JQ_TOKEN, useValue: jQuery},
          EventRouteActivator,
          AuthService,
          EventListResolver, 
          VoterService,
          {
            provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
          }
  ],
  bootstrap: [EventsAppComponent]
}) 
export class AppModule {

   
}

 function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('Do you really wanted to cancel this?');
    }
      return true;
 }
