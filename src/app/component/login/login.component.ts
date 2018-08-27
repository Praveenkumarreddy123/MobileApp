import { Component, OnInit } from '@angular/core';
import { Global } from '../../classes/global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public global: Global) { }

  ngOnInit() {
  }

}
