import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  open: boolean;
  mision: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  modalOpen() {
    this.open = true;
  }
  closeOpen() {
    this.open = false;
  }
  openMision(mision) {
    this.mision = mision;
  }
  closeMision() {
    this.mision = '';
  }
}
