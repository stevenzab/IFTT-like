import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-discord-card',
  templateUrl: './discord-card.component.html',
  styleUrls: ['./discord-card.component.css']
})
export class DiscordCardComponent implements OnInit {
  @Output() discordEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSide() {
    this.discordEvent.emit();
  }

}
