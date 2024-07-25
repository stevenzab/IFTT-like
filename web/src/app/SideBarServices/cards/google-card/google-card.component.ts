import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-google-card',
  templateUrl: './google-card.component.html',
  styleUrls: ['./google-card.component.css']
})
export class GoogleCardComponent implements OnInit {
  @Output() googleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.googleEvent.emit();
  }

}
