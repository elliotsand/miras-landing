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
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
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
