import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Cat } from "../_models/cat";

@Component({
  selector: 'app-vote-img',
  templateUrl: './vote-img.component.html',
  styleUrls: ['./vote-img.component.css']
})
export class VoteImgComponent implements OnInit {


  @Input('cat') cat: Cat;


  constructor() { }

  ngOnInit() {
  }

}
