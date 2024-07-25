import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-steam-card',
  templateUrl: './steam-card.component.html',
  styleUrls: ['./steam-card.component.css']
})
export class SteamCardComponent implements OnInit {
  @Output() steamEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.steamEvent.emit();
  }

}
