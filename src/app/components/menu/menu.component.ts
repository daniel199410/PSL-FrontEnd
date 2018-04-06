import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  tabId = 1;

  ngOnInit() {
  }

  changeTab(id:number){
    this.tabId = id;
  }

  checkSelected(id:number){
    return this.tabId === id;
  }

  logout(){
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

}
