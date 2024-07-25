import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catresponse-card',
  templateUrl: './catresponse-card.component.html',
  styleUrls: ['./catresponse-card.component.css']
})
export class CatresponseCardComponent implements OnInit {
  @Output() catResponseEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.catResponseEvent.emit();
  }
}
