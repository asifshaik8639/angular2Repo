import {Component, Input} from '@angular/core';
@Component({
  selector: 'collapsable-well',
  template: `
   <div (click)="toggleClick()" class="well pointable">
        <h4>
          <ng-content select="[well-title]"></ng-content>
        </h4>    
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>   
   </div>
   `    
})
export class CollapsableComponent {
  @Input() title: string;
  visible: boolean; 
  
 toggleClick() {
    this.visible = !this.visible;
 }  
    

}