import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';

@Component({
  selector: 'app-meteo-content',
  templateUrl: './meteo-content.component.html',
  styleUrls: ['./meteo-content.component.css']
})
export class MeteoContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() meteoAcrea = new EventEmitter<Area>();
  params: string[] = []
  formGroups_1!: FormGroup;
  formGroups_2!: FormGroup;
  Ville = new FormControl (null)
  Symbole = new FormControl (null)
  Temperature = new FormControl (null)
  humidité = new FormControl (null)
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroups_1 = this.formBuilder.group({
      Ville: [null],
      Symbole: [null],
      Temperature: [null],
    })
    this.formGroups_2 = this.formBuilder.group({
      Ville: [null],
      Symbole: [null],
      humidité: [null],
    })
  }

  sendOne(){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_1.value.Ville)
    this.params.push(this.formGroups_1.value.Symbole)
    this.params.push(this.formGroups_1.value.Temperature)
    my_area.ac_ar = 'Action'
    my_area.params = this.params
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    //console.log(my_area)
    this.meteoAcrea.emit(my_area)
  }
  sendTwo(){
    let my_area = new Area;
    my_area.id_area = this.acrea[1].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_2.value.Ville)
    this.params.push(this.formGroups_2.value.Symbole)
    this.params.push(this.formGroups_2.value.Temperature)
    my_area.ac_ar = 'Action'
    my_area.params = this.params
    my_area.acrea = this.acrea[1]
    my_area.service = this.service
    //console.log(my_area.params[1])
    this.meteoAcrea.emit(my_area)
  }
}
