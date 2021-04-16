import { Component, OnInit } from '@angular/core';
import { VideosService } from './shared/videos.service';
import { LoginService } from './pages/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private videosService: VideosService, private loginService: LoginService) {
   console.log("APP COMPONENTS CONSTRUCTOR");
   this.videosService.getVideosFromServer();
   
  }

  ngOnInit() {
    this.loginService.autoLogin();
    
  }


}
