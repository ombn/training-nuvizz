import {Directive,ElementRef,Renderer} from '@angular/core'


@Directive({
    selector : '[directive-demo]',
    host: {
        '(focus)':'onFouMethod()',
        '(blur)':'onBlrMethod()'
    }
})

export class DirectiveDemo {

    constructor(private el:ElementRef,private renderer: Renderer)
    {

    }

    onFouMethod()
    {
    this.renderer.setElementStyle(this.el.nativeElement,'font-weight','bold');
    this.renderer.setElementStyle(this.el.nativeElement,'width','300px');
    }

    onBlrMethod()
    {
        this.renderer.setElementStyle(this.el.nativeElement,'font-weight','normal');
        this.renderer.setElementStyle(this.el.nativeElement,'width','200px');
    }
}