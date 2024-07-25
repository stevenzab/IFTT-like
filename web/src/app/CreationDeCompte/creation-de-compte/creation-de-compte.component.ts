import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, NgForm} from '@angular/forms';
import { Account } from '../../Modèles/account';
import { WebService } from 'src/app/services/web.service';
import {Router} from '@angular/router';
import { UserInfo } from 'src/app/Modèles/userInfo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-creation-de-compte',
  templateUrl: './creation-de-compte.component.html',
  styleUrls: ['./creation-de-compte.component.css']
})
export class CreationDeCompteComponent implements OnInit {
  @Output() loadEvent = new EventEmitter();

  email = new FormControl  (null, [Validators.required, Validators.email]);
  nom = new FormControl (null, [Validators.required]);
  mdp = new FormControl (null, [Validators.required]);
  prenom = new FormControl (null, [Validators.required]);

  hide = true;
  IsWait = false;

  public userInfo: UserInfo = new UserInfo();
  account = {username: '', FamName: '', email: '', password: ''};
  formGroups!: FormGroup;

  constructor(private formBuilder: FormBuilder, private webservice: WebService, private router: Router, private authService: AuthService) { }

  auth2: any;
  @ViewChild('registerRef', { static: true }) registerElement!: ElementRef;
  ngOnInit(): void {
    this.createForm();
    this.googleAuthSDK();
  }

  createForm() {
    this.formGroups = this.formBuilder.group({
      'prenom': [null, Validators.required],
      'nom': [null, Validators.required],
      'email': [null, Validators.required, Validators.email],
      'mdp': [null, Validators.required],
    });
  }

  checkForm(): Boolean {
    if (this.email.valid == true && this.nom.valid == true && this.prenom.valid == true && this.mdp.valid == true) {
      return false;
    }
    else {
        return true;
    }
  }


  errorMessage() {
    if (this.email.hasError('required')) {
      return 'il faut mettre votre Email';
    }
    return this.email.hasError('email') ? 'Email non valide' : '';
  }

  googleAuthSDK() {

    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '367250938727-o0ks62q9em71lve2blinv219uqvg8gg5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email',
          plugin_name: 'register'
        });
        this.callRegister();
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
  
  
  callRegister() {
    this.auth2.attachClickHandler(this.registerElement.nativeElement, {},
      (googleAuthUser: any) => {
        let profile = googleAuthUser.getBasicProfile();
        console.log(profile);
        this.loadEvent.emit();
        this.authService.registerGoogle(profile, googleAuthUser.getAuthResponse().id_token, "Google").subscribe(
          res => {
            if (res.message === "OK") {
              this.router.navigate(["home"]).then(_ => console.log('Connected'));
              this.userInfo.first_name = res.first_name;
              this.userInfo.last_name = res.last_name;
              this.userInfo.user_token = res['ID Token'];
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
      reloadCurrentPage() {
        window.location.reload();
      }
  register(): void {
     this.loadEvent.emit();
     this.authService.register({user : this.account.username, Last : this.account.FamName, email : this.account.email, Password : this.account.password}).subscribe(
      res => {
        if (res.message === "OK"){
          this.router.navigate(["home"]).then(() => {this.reloadCurrentPage()});
          this.userInfo.first_name = res.first_name;
          this.userInfo.last_name = res.last_name;
          this.userInfo.user_token = res['ID Token'];
          localStorage.setItem('tokenID',this.userInfo.user_token)
        }
      },
      err => {
        alert(err.message)
      },
    )
  }
}
