import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css']
})
export class KittenCardComponent implements OnInit {
  @Output() kittenEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.kittenEvent.emit();
  }

}
