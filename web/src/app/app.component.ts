import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';
import { WebService } from './services/web.service';
import { DownloadService } from './services/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isConnected = false;
  title = 'web';
  password : string = '';
  constructor(private tokenService: TokenService, public router: Router, private user:WebService, private elementRef: ElementRef){
    if (tokenService.getToken() != null){
      this.isConnected = true;
    }
  }

  checkConnect() {
    return this.isConnected;
  }
  reloadCurrentPage() {
    window.location.reload();
  }

  disconnect() {
    this.isConnected = false;
    this.tokenService.removeToken()

    this.router.navigate(['login']).then(() => {
      this.reloadCurrentPage();
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = "#d7eef8";
  }
}
