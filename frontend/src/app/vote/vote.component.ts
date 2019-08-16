import { Cat } from "../_models/cat";

import { Component, OnInit } from '@angular/core';
import { CatService } from '../_services/cat.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public catA: Cat;
  public catB: Cat;


  constructor(private catservice: CatService) { }

  ngOnInit() {
    this.catservice.getCatMatchup().subscribe((data) => {
      this.catA = data[0];
      this.catB = data[1];
      console.log(data);
    });
  }

  onVote(event) {

    let loser = event === this.catA.id ? this.catB.id : this.catB.id;

    this.catservice.postMatchupVote(event, loser).subscribe((data) => {

      if (data[0].id === this.catA.id)
        this.catB = data[1];
      else
        this.catA = data[1];

    })
  }

}
