import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { User } from '../login/user.module';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit   {

  isLogged = false;
  business = 'business';
 
  
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.getUserLogged();
  }

 
}
