import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pornhub-card',
  templateUrl: './pornhub-card.component.html',
  styleUrls: ['./pornhub-card.component.css']
})
export class PornhubCardComponent implements OnInit {
  @Output() pornhubEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.pornhubEvent.emit();
  }

}
