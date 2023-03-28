import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menus = 
  [
    {menu: 'Home', link:'pages/home',url:'home'},
    {menu: 'Services', link:'pages/service', subMenus:[''],url:'nature_people'},
    {menu: 'Activities', link:'pages/activity',url:'tablet'},
    {menu: 'Reports',link:'pages/reports',url:'grid_on'},
    // {menu: 'Inventory', subMenus:['Assets']},
    // {menu: 'Help & Support'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
