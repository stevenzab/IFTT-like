import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  IsWait = false;

  constructor() { }

  ngOnInit(): void {
  }

  loading() {
    this.IsWait = true;
    setTimeout(() =>{this.IsWait = false}, 2000);
  }


}
