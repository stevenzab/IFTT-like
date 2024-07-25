import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {
  @Output() meteoEvent = new EventEmitter();
  @Output() steamEvent = new EventEmitter();
  @Output() discordEvent = new EventEmitter();
  @Output() googleEvent = new EventEmitter();
  @Output() outlookEvent = new EventEmitter();
  @Output() pornhubEvent = new EventEmitter();
  @Output() edamamEvent = new EventEmitter();
  @Output() catResponseEvent = new EventEmitter();
  @Output() dogResponseEvent = new EventEmitter();
  @Output() randomUserGenEvent = new EventEmitter();
  @Output() ipEvent = new EventEmitter();
  @Output() kittenEvent = new EventEmitter();
  @Output() numbEvent = new EventEmitter();
  @Output() factEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  openSideMeteo() {
    this.meteoEvent.emit();
  }
  openSideSteam() {
    this.steamEvent.emit();
  }
  openSideDiscord() {
    this.discordEvent.emit();
  }
  openSideOutlook() {
    this.outlookEvent.emit();
  }
  openSidePornhub() {
    this.pornhubEvent.emit();
  }
  openSideGoogle() {
    this.googleEvent.emit();
  }
  openSideEdamam() {
    this.edamamEvent.emit();
  }
  openSideDogResponse() {
    this.dogResponseEvent.emit();
  }
  openSideCatResponseEvent() {
    this.catResponseEvent.emit();
  }
  openSideRandomUserGen() {
    this.randomUserGenEvent.emit();
  }
  openSideKitten() {
    this.kittenEvent.emit();
  }
  openSideNumb() {
    this.numbEvent.emit();
  }
  openSideIp() {
    this.ipEvent.emit();
  }
  openSideFact() {
    this.factEvent.emit();
  }
}
