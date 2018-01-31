import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
    selector:'couter-component',
    inputs: ['counter'],
    outputs:['counterChanged'],
    template:`    
    <div (click)="counterEvent()">
    Click
    </div>`
    })
    export class CounterComponent{
        counter: number;
        public counterChanged= new EventEmitter();
        counterEvent(evt:Event)
        {
            console.log('child component')
            this.counterChanged.emit(this.counter);
            this.counter++;
        }

    }