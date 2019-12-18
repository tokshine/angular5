import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals:any;
  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) {
    this.route.params.subscribe(r=>alert(r.id));
   }
sendMeHome(){
  this.router.navigate(['']);
}

  ngOnInit() {
    this.dataService.goal.subscribe(g=>this.goals=g); 
  }

}
