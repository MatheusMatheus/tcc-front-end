import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../../dominio/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
