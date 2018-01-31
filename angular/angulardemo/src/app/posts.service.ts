//observable to promise, wil be singleon if you inject in module
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Posts} from './posts.model';
import {Http} from '@angular/http';

@Injectable()
    export class PostService{
url: string ='https://jsonplaceholder.typicode.com/posts'

constructor(private http: Http)
{

}
//OLD way with promise
//getPosts(): Promise<Posts>
//{
// return this.http.get(this.url).toPromise().then(response=> response.json());
//}

//with subscripe
getPosts()
{
 return this.http.get(this.url).map(res=> {
     return res.json();
 })
}
    }
