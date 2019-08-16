import { Component, OnInit } from '@angular/core';
import {CatService} from '../_services/cat.service'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  private catA:Cat;
  private catB:Cat;

  constructor(private catservice:CatService) { }

  ngOnInit() {
    this.catservice.getCatMatchup().subscribe((data)=>{
      this.catA = data[0];
      this.catB = data[1];
    });
  }

}
