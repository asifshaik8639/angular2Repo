import {Injectable} from '@angular/core'
import {EventService} from './shared/event.service'
import {Resolve} from '@angular/router'

@Injectable({})
export class EventResolver implements Resolve<any> {

 constructor(private eventService: EventService) { }
 
 resolve() {
    this.eventService.getEvent.map(event => event); 
 }
 

}