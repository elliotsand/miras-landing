import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service-internal',
  templateUrl: './service-internal.component.html',
  styleUrls: ['./service-internal.component.scss']
})
export class ServiceInternalComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
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
