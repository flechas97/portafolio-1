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
          ':enter',
          [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
          { optional: true }
        ),
        //  query(
        //   ':leave',
        //    [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0}))],
        //   { optional: true }
        // ),
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
