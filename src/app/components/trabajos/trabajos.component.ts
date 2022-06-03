import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
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
