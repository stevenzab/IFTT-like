import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-outlook-card',
  templateUrl: './outlook-card.component.html',
  styleUrls: ['./outlook-card.component.css']
})
export class OutlookCardComponent implements OnInit {
  @Output() outlookEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.outlookEvent.emit();
  }

}
