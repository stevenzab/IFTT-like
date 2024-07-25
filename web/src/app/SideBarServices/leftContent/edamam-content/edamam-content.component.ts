import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
@Component({
  selector: 'app-edamam-content',
  templateUrl: './edamam-content.component.html',
  styleUrls: ['./edamam-content.component.css']
})
export class EdamamContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() edamamAcrea = new EventEmitter<Area>();

  constructor() { }

  ngOnInit(): void {
  }
  send(){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    my_area.params = null
    my_area.ac_ar = "Action"
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    this.edamamAcrea.emit(my_area)
  }

}
