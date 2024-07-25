import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective, NgForm, } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { WebService } from '../services/web.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() loadEvent = new EventEmitter();
  hide = false;
  loginForm!: FormGroup;
  matcher = new MyErrorStateMatcher();
  email = new FormControl (null, [Validators.required, Validators.email]);
  password = new FormControl (null, [Validators.required])
  log = {email: '', password: ''};
  formGroups!: FormGroup;
  tokenID!: string;
  isLoggedIn!: boolean;
  

  constructor(private authService: AuthService, public dialog : MatDialog, private router: Router, private formBuilder: FormBuilder,  private webservice: WebService) { }

  toggleHide () {
    this.hide = !this.hide;
  }
  auth2: any;
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  ngOnInit(): void {
    this.formGroups = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
    this.googleAuthSDK();
  }

  googleAuthSDK() {

    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '367250938727-o0ks62q9em71lve2blinv219uqvg8gg5.apps.googleusercontent.com',
          plugin_name:'login',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.callLogin();
      });
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script');
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }


  callLogin() {

      this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleAuthUser: any) => {

          let profile = googleAuthUser.getBasicProfile();
          console.log(profile);
          this.authService.registerGoogle(profile, googleAuthUser.getAuthResponse().id_token, "Google").subscribe(
            res => {
              if (res.message === "OK") {
                this.router.navigate(["home"]).then(() => {
                  console.log('Connected');
                  this.reloadCurrentPage();
                });
              }
            },
            err => {
              alert(err.message)
            },
          )

        }, (error: any) => {
          alert(JSON.stringify(error, undefined, 2));
        });
    }

  checkForm() {
    if (this.email.valid == true && this.password.valid == true)
      return false;
    else
      return true;
  }

  checkEmail() {
    if (this.email.hasError('required')) {
      return 'Email obligatoire requis';
    }
    return this.email.hasError('email') ? 'Email non valide' : '';
  }

  checkPassword() {
    if (this.password.hasError('required')) {
      return 'Mot de passe obligatoire requis';
    }
    return this.password.hasError('password') ? 'Mot de passe non valide' : '';
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  login() : void {
    this.loadEvent.emit();
    console.log(this.formGroups.value)
    this.authService.login(this.formGroups.value).subscribe(
      res => {
        if (res.message === "OK") {
          this.tokenID = res['ID Token']
          localStorage.setItem('tokenID',this.tokenID)
          this.router.navigate(["home"]).then(() => {
            this.reloadCurrentPage();
          });
        }
      },
      err => {
        alert(err.message)
      },
    )
  }
}