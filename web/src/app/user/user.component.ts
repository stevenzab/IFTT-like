import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { UserInfoService } from '../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {

  info : any;
  constructor(private tokenService: TokenService, public authService: AuthService, public user : UserInfoService, public router: Router) { }

  ngOnInit(): void {
    const token = this.tokenService.getToken()
    if (token == null) {
      alert('Vous devez vous connecter avant');
      this.router.navigate(['login'])
    } else {
      this.info = this.user.getUser(this.tokenService.getToken()).subscribe((result: any) => {
        console.log(result.Users[0]);
        this.info = result.Users[0]
      },
      (err: any) => {
        alert('Vous devez vous connecter avant');
        this.router.navigate(['login'])
        },
      );
    }
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  deleteUser(): void {
    if(confirm("Êtes vous sûr de supprimer votre compte ?")) {
      console.log("Implement delete functionality here");
        this.user.deleteUser(this.tokenService.getToken()).subscribe((res) => {
          this.tokenService.removeToken();
          this.router.navigate(['login']).then(() => {
            this.reloadCurrentPage();
          })
        })
    }
  }
}
