import {Component} from '@angular/core';


@Component({
selector:'random-quote',
template:`
<style>.quote {
    background-color: red
}
</style>
<div class="quote">
<h2>Random Quote</h2>
<p >{{quote.Line}}- {{quote.author}}</p>
</div>
`
})

export class RandomQuoteComponent{
quotes: object[] =[{
    "Line":"with great power comes great responsibility",
    "author":"Dinesh"
},
{
    "Line":"Behind every body , i stand simply",
    "author":"Palash"
}];
randomIndex: number = Math.floor(Math.random()* this.quotes.length);
quote = this.quotes[this.randomIndex];
}