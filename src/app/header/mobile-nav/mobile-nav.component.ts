import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/pages/login/login.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  isLogged = false;
  private userSub: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userSub =  this.loginService.user.subscribe(user => {
      this.isLogged = !user ? false : true;
      this.loginService.setUserLogged(this.isLogged);
     });
  
     this.isLogged = this.loginService.isLogged;
  }

  toggleMenu = false;

  onToggleMenu() {
    if(this.toggleMenu){
       this.toggleMenu = false;
    }else{
      this.toggleMenu = true;
    }
    
  }

  onLogout(){
    this.loginService.logout();
    
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
