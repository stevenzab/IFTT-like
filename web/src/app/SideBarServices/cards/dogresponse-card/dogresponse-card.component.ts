import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dogresponse-card',
  templateUrl: './dogresponse-card.component.html',
  styleUrls: ['./dogresponse-card.component.css']
})
export class DogresponseCardComponent implements OnInit {
  @Output() dogResponseEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.dogResponseEvent.emit();
  }

}
