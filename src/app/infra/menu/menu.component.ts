import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  exibir: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  minhaConta() {
    this.router.navigate(['login']);
  }

  toggle() {
    this.exibir = !this.exibir;
    console.log(this.exibir);
    return this.exibir;
  }

}
