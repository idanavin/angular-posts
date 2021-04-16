import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {
  isLogged = false;
  weddings = 'weddings';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.getUserLogged();
  }

}
