import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  exibir: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.exibir);
  }

  toggle() {
    this.exibir = !this.exibir;
    console.log(this.exibir);
    return this.exibir;
  }

}
