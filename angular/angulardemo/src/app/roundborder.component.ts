import {Component} from '@angular/core';





@Component({selector:'round-border',
template:`
<div style='border:2px solid black; border-radius:5px; box-shadow:4px 4px 4px #333'>
<span>Round Border</span>
<ng-content></ng-content>
</div>
`})

export class RoundBorderComponent{

}