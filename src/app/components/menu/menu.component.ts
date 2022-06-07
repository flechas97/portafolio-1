import { Component, OnInit,HostListener  } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute,RouterOutlet} from '@angular/router';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ position: 'relative', right: '0%' }), animate('0.2s', style({position: 'relative', right: '0%'}))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ position: 'absolute', right: '100%',top:0, opacity: 1,width: '100%' }), animate('0.2s', style({ position: 'absolute', right: '0%',top:0, opacity: 1,width: '100%' }))],
          { optional: true }
        ),
        
      ])
    ])
    
      ] // register the animations
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
  prepareRoute(outlet: RouterOutlet) {
    console.log("ruta")
    return outlet?.activatedRouteData?.['animation'];
  }
}
