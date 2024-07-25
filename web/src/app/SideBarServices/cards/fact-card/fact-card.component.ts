import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.css']
})
export class FactCardComponent implements OnInit {
  @Output() factEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.factEvent.emit();
  }

}
