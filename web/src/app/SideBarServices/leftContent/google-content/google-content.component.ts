import { Component, Input, OnInit } from '@angular/core';
import { Acrea } from 'src/app/Modèles/acrea';
@Component({
  selector: 'app-google-content',
  templateUrl: './google-content.component.html',
  styleUrls: ['./google-content.component.css']
})
export class GoogleContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  constructor() { }

  ngOnInit(): void {
  }

}
