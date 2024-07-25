import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Acrea } from 'src/app/Modèles/acrea';
import { Area } from 'src/app/Modèles/Area';
import { Services } from 'src/app/Modèles/services';
import { WebService } from 'src/app/services/web.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  meteoOpen = false
  steamOpen = false
  googleOpen = false
  discordOpen = false
  outlookOpen = false
  pornhubOpen = false
  dogOpen = false
  catOpen = false
  randomUserGenOpen = false
  edamamOpen = false
  kittenOpen = false
  ipOpen = false
  numbOpen = false
  factOpen = false

  areas: Area[] = [] ;
  tokenID!: string | null;
  services: Services[] = []
  acrea: Acrea[] = []
  my_area: Area[] = []
  displayedColumns: string[] = ['id', 'name'];
  test: Services = {id:8 , service_name:"toto"}

  constructor(private webservice: WebService, private token: TokenService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tokenID = localStorage.getItem('tokenID')

    this.webservice.getServiceMethode(this.tokenID)?.subscribe(res => {
      console.log(res.services.length)
      for (let i = 0; i < res.services.length; i++) {
        this.services[i] = res.services[i]

      }

    },
    err => {
      alert(err.message)
    },
    )
  }

  ToggleDraw(x: number){
    if (x == 0) {
      this.meteoOpen = true;
    } else if (x == 1) {
      this.googleOpen = true;
    } else if (x == 2) {
      this.outlookOpen = true;
    } else if (x == 3) {
      this.edamamOpen = true;
    } else if (x == 4) {
      this.steamOpen = true;
    } else if (x == 5) {
      this.discordOpen = true;
    } else if (x == 6) {
      this.pornhubOpen = true;
    } else if (x == 7) {
      this.catOpen = true;
    } else if (x == 8) {
      this.randomUserGenOpen = true;
    } else if (x == 9) {
      this.dogOpen = true;
    } else if (x == 10) {
      this.ipOpen = true;
    } else if (x == 11) {
      this.kittenOpen = true;
    } else if (x == 12) {
      this.numbOpen = true;
    } else if (x == 13) {
      this.factOpen = true;
    }
    
    this.webservice.getActionMethode(this.tokenID, this.services[x].id).subscribe(res => {
      if (this.acrea.length != 0) {
        this.acrea = []
      }
      for (let i = 0; i < res.Acrea.length; i++) {
        this.acrea[i] = res.Acrea[i]
        console.log(this.acrea)
      }
    })
  }

  closeEv() {
    this.meteoOpen = false
    this.steamOpen = false
    this.googleOpen = false
    this.discordOpen = false
    this.outlookOpen = false
    this.pornhubOpen = false
    this.dogOpen = false
    this.catOpen = false
    this.randomUserGenOpen = false
    this.edamamOpen = false
  
  }
  openSnackBar() {
    this._snackBar.open("Vous ne pouvez pas séléctionner deux Action ou Reaction !", "fermer");
  }
  checkArea(area: Area) {
    if (this.my_area.length >= 2) {
      this.my_area = []
    }
    this.my_area.push(area)
    if (this.my_area.length == 2) {
        if (this.my_area[0].ac_ar == this.my_area[1].ac_ar) {
          this.my_area = []
          this.openSnackBar()
      } else {
        this.webservice.CreateAcrea(this.tokenID, this.my_area[0].service_id_area, this.my_area[1].service_id_area, this.my_area[0].id_area, this.my_area[1].id_area, this.my_area[0].params, this.my_area[1].params ).subscribe(res => {
        console.log(res)
        this.webservice.getAcrea(this.token.getToken()).subscribe(res => {console.log(res)});
      })
    }
    }
  }

}
