import {Injectable} from '@angular/core'
import {ISession} from '../shared/event.model'

@Injectable()
export class VoterService {
    userHasVoted(session: ISession, username: string) {
        console.log(' in userHasVoted => ',username);
        return session.voters.some(voter => voter === username );    
    }
    
    deleteVoter(session: ISession, username: string) {
        console.log(' in deleteVoter => ',username);
        return session.voters.filter(voter => voter !== username );
    }
    
    addVoter(session: ISession, username: string) {
        console.log(' in addVoter => ',username);
        return session.voters.push(username);
    }
}