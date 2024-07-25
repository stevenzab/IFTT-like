import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-random-user-gen-card',
  templateUrl: './random-user-gen-card.component.html',
  styleUrls: ['./random-user-gen-card.component.css']
})
export class RandomUserGenCardComponent implements OnInit {
  @Output() randomUserGenEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.randomUserGenEvent.emit();
  }
}
