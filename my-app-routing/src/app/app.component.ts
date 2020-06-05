import { Component } from '@angular/core';
import * as _ from 'lodash'; //50kb
import {cloneDeep} from "lodash-es"; //


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  Arr = [];
  foods = ["Pizza", "Burger", "French friyes"];

  addFood(food: any){
    this.foods = [...this.foods, food];
  }


  title = 'my-app';

  createObject(){

    console.log("Clicked");
    
    alert("hi");
    
    const target = {a: 1, b: 2, 
      address: {
        city: "Prague"
      }
    };
    const source = {b: 4, c: 5};
  
    //const returnedTarget = Object.assign(target, source);
    //const returnedTarget = {...target, ...source};
    // DEEP Copy
  
    const returnedTarget = _.cloneDeep(target, source);
    console.log(returnedTarget);
  }


}

