import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  @Output() loadEvent = new EventEmitter();
  log = {username: '', password: '', confirmPassword: ''};
  constructor(private router: Router,  private webservice: WebService) { }

  ngOnInit(): void {
  }
  forgot(): void {
    if (this.log.password != this.log.confirmPassword) {
      alert('Mot de passe incorrecte. Remettez correctement le mot de passe')
      return;
    }
    this.loadEvent.emit();
    this.webservice.forgotMethod(this.log.username, this.log.password).subscribe(
      res => {
        if (res.message === "OK"){
          this.router.navigate(["login"]);
        }
      },
      err => {
        alert(err.message);
      },
    );
  }
}
