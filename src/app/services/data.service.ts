import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal){
    //i think this next makes the collection to be reinitialised
   this.goals.next(goal);
  }

}
