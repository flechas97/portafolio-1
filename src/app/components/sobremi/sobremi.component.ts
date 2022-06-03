import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  widthscreen:any;
  constructor() {
    this.widthscreen = window.innerWidth;
    console.log(this.widthscreen) 
  }

  ngOnInit(): void {
    
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.widthscreen = window.innerWidth;
  }

}
