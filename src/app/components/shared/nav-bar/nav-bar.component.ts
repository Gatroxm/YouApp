import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  openModalLogin = false;
  constructor() { }

  ngOnInit(): void {
  }
  openModal(): void{
    this.openModalLogin = true;
    console.log(this.openModalLogin)
  }
}
