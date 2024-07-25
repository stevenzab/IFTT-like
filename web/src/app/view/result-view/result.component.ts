import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/Modèles/Area';
import { WebService } from 'src/app/services/web.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
    tokenID!: string | null;
    areas: Area[] = []
    constructor(public area: Area, public token: TokenService, public web : WebService) { }

    ngOnInit(): void {
        this.tokenID = localStorage.getItem('tokenID')
        this.web.getAcrea(this.tokenID)?.subscribe (res => {
            console.log(res)
        },
        err => {
          alert(err.message)
        });
    }

    displayAcrea(): void {
        this.web.getAcrea(this.token.getToken());
    }
}
