import { Component,OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { Form } from '@angular/forms/src/directives/form_interface';
import { DemoService } from './demoService.service';
import { PostService } from './posts.service';
import { Posts } from './posts.model';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-root',
  template: `<div>
  <h1>Filter title case{{title| titlecase}}</h1>
  <h4>Filter currency {{123 | currency : 'INR':true}}</h4>
  <h4>Array Slice : </h4>
  <h4>Decimal point  :{{pi | number: '1.1-2'}} </h4>
  <h4>Percentage  :{{score | percent: '2.1-2'}} </h4>
  <h4>Custom Filter : {{37 | ConvertPipe}}</h4>
  <random-quote></random-quote>
  <img [src]="imgUrl" [width]="imgWidth" [height]="imgHeight"/>
  <hr/>
  <form>
  <input type="text" [(ngModel)]="title" name="txtTitle"/>
  <input type="button" (click)="changeTitle()"
  value="Change title" />
  <br/>
  </form>
  <couter-component [counter]="counterValue" (counterChanged)="handleEvent($event)"></couter-component>
  <h2>custom directive</h2>
  <form>
First name : <input type="text" name="txtfname" directive-demo/><br/>
Last name : <input type="text" name="txtlname" directive-demo/><br/>
  </form>
  <h2>Built in directive(structural ngIf) which chnages dom</h2>
  </div>
  <div *ngIf="companies.length>0 ; else nocomments">
  <p>Companies here.....</p>
  <ng-template #nocomments>
  <p>No Companies here.....</p>
  </ng-template>
  </div>
  <h2>Built in directive(structural ngSwitch) which chnages dom</h2>
  <select [(ngModel)]='country'>
<option value="IN">India</option>
<option value="USA">USA</option>
  </select>
  <div [ngSwitch]="country">
<h3 *ngSwitchCase="'IN'">Indian Rupee</h3>
<h3 *ngSwitchCase="'USA'">US Dollar</h3>
<h3 *ngSwitchDefault>US Dollar</h3>
  </div>
  <h3>example for ngFor</h3>
<div *ngFor="let comp of companies">
<span>{{comp| uppercase}}</span>
</div>
<h3>Elvis operator</h3>
<span> email : {{person.work?.email}} </span>
  <h3>tranclusion or ng-content (content projector)</h3>
  <round-border>
  <p>Wells fargo</p>
  </round-border>
  <h3>Angular template driven form</h3>

<form #form="ngForm">
First name : <input type="text" ngModel required name="fname"/> 
Last Name  : <input type="text" ngModel required  name="lname"/>
<input type="button" value="submit" [disabled]="!form.valid" name="btn1" (click)="log(form)"/>
</form>
<h3>Angular Model driven form</h3>
<h3>Angular service</h3>
<div *ngFor="let p of goodPeople">
<span>{{p.name}}</span>
</div>
<h3>Angular $http</h3>
<h3>Angular service</h3>
<div *ngFor="let p of objPosts">
<span>{{p.title}}</span>
</div>
  `,
  styleUrls: ['./app.component.css'],providers:[DemoService]
})
export class AppComponent implements OnInit{
  title = 'Angular app';
  companies: string[]=['Apple','Wells','Dell','ICICI'];
  goodPeople: object;
  objPosts: Posts;
//  constructor(private people:DemoService)
 // {

 // }
 constructor(private postService:PostService,private people:DemoService)
 {

 }
  //ngOnInit()
  //{
    //this.goodPeople=this.people.getAllGoodPeople();
  //}

  ngOnInit()
  {
    this.goodPeople=this.people.getAllGoodPeople();
   // with promise this.postService.getPosts().then((post)=>this.objPosts=post);
   //below with subscribe

this.postService.getPosts().subscribe((resp)=>this.objPosts=resp,error=>console.log(error));
  }
  country:string='IN'
  person: object= {'name':'om','email':'om.bn@outlook.com','work':{'email':'om@work.com'}};
  pi=Math.PI;
  score=0.95;
   imgUrl:string ="../assets/image.jpg";
   imgWidth:number=200;
   imgHeight:number=200;
   counterValue:number=5;
   handleEvent(arg:Event){    
     console.log(arg)
     console.log('parent component')
   }
   changeTitle(){
     this.title="from click its working "
   }

   log(form:any){
     console.log("form clicked ",form.controls.fname.value);
   }
}
