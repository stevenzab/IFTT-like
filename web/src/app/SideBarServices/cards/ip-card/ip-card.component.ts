import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ip-card',
  templateUrl: './ip-card.component.html',
  styleUrls: ['./ip-card.component.css']
})
export class IpCardComponent implements OnInit {
  @Output() ipEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.ipEvent.emit();
  }

}
