import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './randomquote.component';
import { CounterComponent } from './counter.component';
import { PipeDemo } from './pipedemo.pipe';
import { DirectiveDemo } from './directiveDemo.directive';
import { RoundBorderComponent } from './roundborder.component';
import {HttpModule} from '@angular/http';
import { PostService } from './posts.service';


//if you inject in module it would be singleton , else inject in component for multiple instance
@NgModule({
  declarations: [
    AppComponent,RandomQuoteComponent,CounterComponent,PipeDemo,DirectiveDemo,RoundBorderComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
