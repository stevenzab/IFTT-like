import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meteo-card',
  templateUrl: './meteo-card.component.html',
  styleUrls: ['./meteo-card.component.css']
})
export class MeteoCardComponent implements OnInit {
  @Output() meteoEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.meteoEvent.emit();
  }

}
