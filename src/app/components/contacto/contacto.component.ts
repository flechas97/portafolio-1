import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
