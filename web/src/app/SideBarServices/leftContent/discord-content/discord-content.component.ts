import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
@Component({
  selector: 'app-discord-content',
  templateUrl: './discord-content.component.html',
  styleUrls: ['./discord-content.component.css']
})
export class DiscordContentComponent implements OnInit {
  @Input() acrea!: Acrea[]
  @Input() service!: Services
  @Output() discordAcrea = new EventEmitter<Area>();
  Message = new FormControl (null)
  params: string[] = []
  formGroups_1!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formGroups_1 = this.formBuilder.group({
      Message: [null],

    })
  }
  sendOne(){
    let my_area = new Area;
    my_area.id_area = this.acrea[0].id
    my_area.service_id_area = this.service.id
    this.params.push(this.formGroups_1.value.Message)
    my_area.ac_ar = 'Reaction'
    my_area.params = this.params
    my_area.acrea = this.acrea[0]
    my_area.service = this.service
    //console.log(my_area)
    this.discordAcrea.emit(my_area)
  }
  send(){
    let my_area = new Area;
    my_area.id_area = this.acrea[1].id
    my_area.service_id_area = this.service.id
    my_area.params = null
    my_area.ac_ar = "Action"
    my_area.acrea = this.acrea[1]
    my_area.service = this.service
    this.discordAcrea.emit(my_area)
  }

}
