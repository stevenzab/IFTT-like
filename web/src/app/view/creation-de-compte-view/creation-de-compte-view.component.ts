import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-de-compte-view',
  templateUrl: './creation-de-compte-view.component.html',
  styleUrls: ['./creation-de-compte-view.component.css']
})
export class CreationDeCompteViewComponent implements OnInit {
  IsWait = false;

  constructor() { }

  ngOnInit(): void {
  }

  loading() {
    this.IsWait = true;
    setTimeout(() =>{this.IsWait = false}, 2000);
  }

}
