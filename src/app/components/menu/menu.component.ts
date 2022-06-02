import { Component, OnInit,HostListener  } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  widthscreen:any;
  constructor() { }

  ngOnInit(): void {
   this.widthscreen = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.widthscreen = window.innerWidth;
  }
}
