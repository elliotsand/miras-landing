import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-service-supervision',
  templateUrl: './service-supervision.component.html',
  styleUrls: ['./service-supervision.component.scss']
})
export class ServiceSupervisionComponent implements OnInit {

  constructor() { }
  customsuper: OwlOptions = {
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
