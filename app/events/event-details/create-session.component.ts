import {Component, OnInit, Output, EventEmitter} from '@angular/core'
import {FormControl, FormGroup, Validators } from '@angular/forms'
import {Router} from '@angular/router'
import {ISession} from '../shared/event.model'

import {restrictedWords} from '../shared/restricted-words.validator'

@Component({
      selector: 'create-session',
      templateUrl: 'app/events/event-details/create-session.component.html',
      styles: [`
        em {float: right; color: red; padding-left: 10px;}
         .error input, .error textarea, .error select {
            background-color: red;
         }     
         .error ::-webkit-input-placeholder {color: #999;}
         .error :ms-input-placeholder{color: #999;}
         .error ::-moz-placeholder{color: #999;}
         .error :-moz-placeholder{color: #999;}
      `]
})
export class CreateSessionComponent implements OnInit{
   @Output() saveNewSession = new EventEmitter();
   @Output() cancelSession = new EventEmitter();
    newSessionFormGroup: FormGroup;
    name:FormControl;
    presenter: FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;
    voters:FormControl;
    
 constructor(private router:Router) {
 
 }
 

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','boo'])]);
    this.voters = new FormControl('', Validators.required);
    
    this.newSessionFormGroup = new FormGroup({
        name : this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract,
        voters: this.voters
    });
    
  }
  
  saveFormSession(formValues) {
    let session: ISession = {
        id: undefined,
        name : formValues.name,
        presenter: formValues.presenter,
        duration: +formValues.duration,
        level: formValues.level,
        abstract: formValues.abstract,
        voters: []      
    }  
    
    console.log(session);  
    this.saveNewSession.emit(session);
  }
  
  cancel() {
  this.cancelSession.emit();
    
  }
    

}
