import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numb-card',
  templateUrl: './numb-card.component.html',
  styleUrls: ['./numb-card.component.css']
})
export class NumbCardComponent implements OnInit {
  @Output() numbEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  openSide() {
    this.numbEvent.emit();
  }

}
