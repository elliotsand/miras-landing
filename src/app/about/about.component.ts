import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  perfil: string;
  mision: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  modalOpen(perfil) {
    this.perfil = perfil;
  }
  closeOpen() {
    this.perfil = '';
  }
  openMision(mision) {
    this.mision = mision;
  }
  closeMision() {
    this.mision = '';
  }
  clickTop(yset) {
    const pos = window.screen.height;
    window.scrollTo(0, yset - pos);
    console.log(yset);
    console.log(window.screen.height);
  }

}
