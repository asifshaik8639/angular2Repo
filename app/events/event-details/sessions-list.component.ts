import {Component, Input, OnChanges} from '@angular/core'
import {ISession} from '../shared/event.model'
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service'

@Component({
  selector: 'sessions-list',
  templateUrl: 'app/events/event-details/sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges{
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];  
    
    constructor(private auth: AuthService, private voterService: VoterService) {
    
    }
    
    ngOnChanges() {    
        if(this.sessions) {
            this.filterByHandler(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByName) : 
                                     this.visibleSessions.sort(sortByVotes);                
        }    
    }
    
    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);        
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName); 
        }    
    }
    
    
    userHasVoted(session: ISession): boolean {    
      console.log(' ***** userHasVoted ******',this.voterService.userHasVoted(session, this.auth.currentUser.userName))
      return this.voterService.userHasVoted(session, this.auth.currentUser.userName);    
    }
    
    filterByHandler(filterValue) {    
      if(filterValue === 'all') {
        this.visibleSessions = this.sessions.slice(0);      
      } else {
        this.visibleSessions = 
        this.sessions.filter(session => session.level.toLowerCase() === filterValue);                   
        }
    }   

}

function sortByName(s1: ISession, s2: ISession) {
   console.log(" sortByName =>");
    if(s1.name > s2.name) {
       return 1;
    } else if(s1.name < s2.name) {
        return -1;
    } else {
        return 0;
    }

}

function sortByVotes(s1: ISession, s2: ISession) {
console.log(" sortByVotes =>");
    return (s2.voters.length - s1.voters.length);
}

