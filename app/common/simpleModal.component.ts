import {Component, Input, OnInit, Inject, ViewChild, ElementRef} from '@angular/core'
import {JQ_TOKEN} from './jQuery.service'

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #modalContainer  class="modal fade" tabIndex="-1" >
            <div class="modal-dailog">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                      <ng-content></ng-content>
                    </div>
                </div>
            </div>            
        </div>
    `,
    styles: [`
        .modal-body {height: 250px; overflow-y: scroll}        
    `]

})
export class SimpleModalComponent implements OnInit{
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerElement: ElementRef;
    @Input() closeOnBodyClick: string;
    
    private element: HTMLElement;
    
    constructor(@Inject(JQ_TOKEN) private $: any, private domElement: ElementRef) {
            this.element = domElement.nativeElement;
    }
    
    ngOnInit() {
     console.log('in the SimpleModalComponent');    
    }
    
    closeModal() {
      //console.log(' check on close modal ===>  ', this.$(this.element));        
       if(this.closeOnBodyClick.toLowerCase() === 'true') {
            this.$(this.containerElement.nativeElement).modal('hide');
            //this.$(this.element).modal('hide');
       }
        
    }

}