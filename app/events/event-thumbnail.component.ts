import {Component, Input} from '@angular/core'
import {IEvent} from './shared/event.model'
@Component({
   selector: 'event-thumbnail',
   template: `
        <div [routerLink]="['/events', event.id]"  class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date | date: 'y/m/d'}}</div>
            <div [ngClass]="applyStyles()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>             
             </div>
            <div>Price: {{event?.price | currency: 'USD':true}}</div>
            <div *ngIf="event?.location">
                <span>Address:</span>
                <span class="pad-left">{{event?.location?.city}}</span>
            </div>
            <div *ngIf="event?.onlineUrl" >Online URL: {{event?.onlineUrl}}
            </div>
            
        </div>
   `,
    styles: [`
      .green {color: #003300 !important;} 
      .bold {font-weight: bold;}
      .thumbnail {min-height : 30px;}
      .pad-left { margin-left: 10px;}
      .well div{color: red; }
    `]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;
  applyStyles() {
    
   if(this.event && this.event.time === '8:00 am') {
        return ['green', 'bold'];
   }
   return [];
  
  }
  
}