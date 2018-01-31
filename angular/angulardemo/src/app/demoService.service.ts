import { Injectable } from "@angular/core";


@Injectable()
export class DemoService{

    private goodPeople =[
        {name:'Sachin Tendulkar',dob :"1979"},
        {name:'Rahul',dob :"1979"},
        {name:'Manik Badsha',dob :"1979"},
        {name:'Khilji',dob :"1979"},
        {name:'Padmavat',dob :"1979"},
        {name:'Raana',dob :"1979"},
    ]


    getAllGoodPeople(): object[]
    {
        return this.goodPeople;
    }

}