import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
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
