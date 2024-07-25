import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
@Component({
  selector: 'app-catresponse-content',
  templateUrl: './catresponse-content.component.html',
  styleUrls: ['./catresponse-content.component.css']
})
export class CatresponseContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() catAcrea = new EventEmitter<Area>();

  constructor() { }

  ngOnInit(): void {
  }
  send(retour: string){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    my_area.params = [retour]
    my_area.ac_ar = "Reaction"
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    this.catAcrea.emit(my_area)
  }
}
