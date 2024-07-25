import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
@Component({
  selector: 'app-pornhub-content',
  templateUrl: './pornhub-content.component.html',
  styleUrls: ['./pornhub-content.component.css']
})
export class PornhubContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() phAcrea = new EventEmitter<Area>();
  params: string[] = []
  formGroups_1!: FormGroup;
  formGroups_2!: FormGroup;
  formGroups_3!: FormGroup;
  URL = new FormControl (null)
  Pseudo = new FormControl (null)
  URL_cat = new FormControl (null)
  Trans = new FormControl (null)

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroups_1 = this.formBuilder.group({
      URL: [null],

    })
    this.formGroups_2 = this.formBuilder.group({
      Pseudo: [null],

    })
    this.formGroups_3 = this.formBuilder.group({
      URL_cat: [null],
      Trans: [null],

    })
  }
  sendOne(){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_1.value.URL)

    my_area.ac_ar = 'Action'
    my_area.params = this.params
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    console.log(my_area)
    this.phAcrea.emit(my_area)
  }
  sendTwo(){
    let my_area = new Area;
    my_area.id_area = this.acrea[1].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_2.value.Pseudo)
    my_area.ac_ar = 'Action'
    my_area.params = this.params
    console.log(my_area.params[1])
    my_area.acrea = this.acrea[1]
    my_area.service = this.service
    this.phAcrea.emit(my_area)
  }
  sendThree(){
    let my_area = new Area;
    my_area.id_area = this.acrea[2].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_1.value.Ville)
    this.params.push(this.formGroups_1.value.Symbole)
    this.params.push(this.formGroups_1.value.Temperature)
    my_area.ac_ar = 'Reaction'
    my_area.params = this.params
    my_area.acrea = this.acrea[2]
    my_area.service = this.service
    console.log(my_area)
    this.phAcrea.emit(my_area)
  }

}
