import {Component} from '@angular/core'
import { EventService } from '../shared/event.service'
import {ActivatedRoute, Params} from '@angular/router'
import {IEvent, ISession} from '../shared/event.model'


@Component({ 
  templateUrl: 'app/events/event-details/event-details.component.html',
  styles:[`
   .container { padding-left: 20px; padding-right: 20px;}
   .event-image  {height: 100px;}
  `]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  
  }
  
  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
        this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
            this.event = event;
            this.addMode = false;
        })        
        
    }) 
  }
  
  addSession() {
   this.addMode = true;  
  }
  
  saveNewlyAddedSession(session: ISession) {
    let maxAvailabeId = Math.max.apply(null, this.event.sessions.map(session => session.id) )
    session.id = maxAvailabeId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;    
  
  }
  
  GobacktoSessionsList() {
    this.addMode = false;
  }
  
  cancel() {
    this.addMode = false;
  }


}