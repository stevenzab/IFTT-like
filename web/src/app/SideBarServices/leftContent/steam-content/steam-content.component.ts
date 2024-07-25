import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';

@Component({
  selector: 'app-steam-content',
  templateUrl: './steam-content.component.html',
  styleUrls: ['./steam-content.component.css']
})
export class SteamContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() steamAcrea = new EventEmitter<Area>();
  params: string[] = []
  formGroups_1!: FormGroup;
  formGroups_2!: FormGroup;
  ID = new FormControl (null)
  Symbole = new FormControl (null)
  Nombre = new FormControl (null)
  ID_2 = new FormControl (null)

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroups_1 = this.formBuilder.group({
      ID: [null],
      Symbole: [null],
      Nombre: [null],

    })
    this.formGroups_2 = this.formBuilder.group({
      ID_2: [null],

    })
  }
  sendOne(){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_1.value.ID)
    this.params.push(this.formGroups_1.value.Symbole)
    this.params.push(this.formGroups_1.value.Nombre)

    my_area.ac_ar = 'Action'
    my_area.params = this.params
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    console.log(my_area)
    this.steamAcrea.emit(my_area)
  }
  sendTwo(){
    let my_area = new Area;
    my_area.id_area = this.acrea[1].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_2.value.ID_2)
    my_area.ac_ar = 'Action'
    my_area.params = this.params
    my_area.acrea = this.acrea[1]
    my_area.service = this.service
    //console.log(my_area.params[1])
    this.steamAcrea.emit(my_area)
  }

}
