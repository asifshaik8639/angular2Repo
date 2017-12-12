import {Component} from '@angular/core'
import {AuthService} from '../user/auth.service'
import {ISession} from '../events/shared/event.model'
import {EventService} from '../events/shared/event.service'

@Component({
  selector: 'nav-bar',
  templateUrl : 'app/nav/navbar.component.html',
  styles:[`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 10px;}
    @media (max-width: 1200px) {#searchForm {display: none;}}
    li > a.active {color: #F97924;}
  `]
})

export class NavbarComponent {
 searchText: string = '';
 foundSessions: ISession[];
 constructor(private authService: AuthService, private eventService: EventService) {
 
 }

 onCreateEventClick() {
   console.log('clicked on create event');
 }
 
 searchSessions(searchText) {
 console.log('searchSessions in nav bar component.ts =>');
  this.eventService.searchSessionByName(searchText).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log('this.foundSessions are 5=>',this.foundSessions);
  
  });
                                                            
                                                                
  
  
 }
    
}