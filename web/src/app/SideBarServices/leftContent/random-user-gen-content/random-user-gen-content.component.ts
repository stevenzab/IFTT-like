import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
@Component({
  selector: 'app-random-user-gen-content',
  templateUrl: './random-user-gen-content.component.html',
  styleUrls: ['./random-user-gen-content.component.css']
})
export class RandomUserGenContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() randomAcrea = new EventEmitter<Area>();
  
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
    this.randomAcrea.emit(my_area)
  }

}
