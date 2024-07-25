import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.href = '../app/apk/app-armeabi-v7a-release.apk';
    link.download = "area-a.apk";

    document.body.appendChild(link);
    link.click();
    this.router.navigate(['home'])
  }

}
