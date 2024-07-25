import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.href = '../app/apk/client.apk';
    link.download = "client.apk";

    document.body.appendChild(link);
    link.click();
  }

}
