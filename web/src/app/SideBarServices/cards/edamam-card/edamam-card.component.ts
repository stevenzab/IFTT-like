import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edamam-card',
  templateUrl: './edamam-card.component.html',
  styleUrls: ['./edamam-card.component.css']
})
export class EdamamCardComponent implements OnInit {
  @Output() edamamEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.edamamEvent.emit();
  }

}
