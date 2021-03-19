import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-service-direccion',
  templateUrl: './service-direccion.component.html',
  styleUrls: ['./service-direccion.component.scss']
})
export class ServiceDireccionComponent implements OnInit {

  constructor() { }
  customdirec: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  ngOnInit(): void {

  }
}
