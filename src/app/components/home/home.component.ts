import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals',[
     transition('*=>*',[
       query(':enter',style({opacity:0}),{optional:true}),
      // query(':enter',stagger)
      //I did not finish this angular animations stuff
      //https://www.youtube.com/watch?v=oa9cnWTpqP8
     ])

    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText:string ="Add item";
  goalText:string ="My first life goal";
  goals=[];

  constructor(private dataService:DataService) { 

  }

  ngOnInit() {
    
    this.dataService.goal.subscribe(res =>this.goals=res);
    this.dataService.changeGoal(this.goals);
    this.itemCount=this.goals.length;
  }

  addItem(){
      this.goals.push(this.goalText);
      this.goalText ='';      
      this.dataService.changeGoal(this.goals);
      this.itemCount=this.goals.length;
  }
  
 
  removeItem(i){
    this.goals.splice(i,1);
    this.dataService.changeGoal(this.goals);
    this.itemCount=this.goals.length;
  }

}
