import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exibir = false;

  constructor() { }

  colorido = false;
  naoMostra = true;

  toggle() {
    this.exibir = !this.exibir;
    console.log(this.exibir);
    return this.exibir;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.pageYOffset > 100 ) {
      this.colorido = true;
      this.naoMostra = true
    } else {
      this.colorido = false;
    }
  }

}
