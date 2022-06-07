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
  animacion(event:any){
    // console.log()
    event.target.classList.add("jorge")
    event.target.classList.add("color")
    // setTimeout(() => {
     
    // }, 500);
    setTimeout(() => {
      event.target.classList.remove("jorge")
    }, 1000);
  }
  animacion2(event:any){
    event.target.classList.remove("color")
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.widthscreen = window.innerWidth;
  }
}
