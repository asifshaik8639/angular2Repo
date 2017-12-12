import {Component, Input, Output, EventEmitter} from '@angular/core'
@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="votingWidget well">
                <div class="votingButton">
                    <i  class="glyphicon glyphicon-heart" 
                        [style.color] = "iconColor"
                    
                    ></i>
                    
                </div>
                
                 <div class="votingCount badge badge-inverse">
                    <div>{{count}}</div>
                </div>               
                
            </div>
           
        
        </div>
    `

})
export class UpvoteComponent {
 @Input() count: number;
 iconColor: string;
 @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'green';
 }
 
 @Output() vote = new EventEmitter();
 
 onClick() {
    this.vote.emit({});
 
 }
 
}