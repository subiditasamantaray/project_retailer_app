import { Component, OnInit } from '@angular/core';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles= [
    { cols: 3, rows: 2.5, color: 'lightblue'},
    { cols: 1, rows: 4.5, color: 'lightgreen'},
    { cols: 1, rows: 2.5, color: 'lightpink'},
    { cols: 2, rows: 2.5, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

