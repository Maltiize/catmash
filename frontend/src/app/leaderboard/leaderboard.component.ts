import {Component, OnInit,ViewChild} from '@angular/core';

import { Cat } from "../_models/cat";
import { CatService } from '../_services/cat.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  displayedColumns: string[] = ['position','name', 'gender', 'nbMatch', 'score'];

  dataSource = new MatTableDataSource<Cat>([]);

  constructor(private catservice:CatService){

  }

  ngOnInit(){
      this.catservice.getCats().subscribe((data)=>{
        data.forEach((element,index) => {
          element.rank = index ;
        });
        this.dataSource = new MatTableDataSource<Cat>(data);
        this.dataSource.paginator = this.paginator;
      })
  }
}
