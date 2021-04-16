import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerHandelerService } from '../../shared/server-handeler.service';
import { VideosService } from 'src/app/shared/videos.service';
import { Video } from 'src/app/videos/video.module';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  videos: any;

  @ViewChild('f', { static: true }) loginForm: NgForm;
  name: string;
  url: string;
  type: string;
  description: string;
  page: string;
  submited = false;
  video: Video;
  urlValid= true;
  constructor(private ServerHandelerService: ServerHandelerService,private videosService: VideosService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submited = true;
    
    this.name = this.loginForm.value.name;
    this.type = this.loginForm.value.type;
    this.url = this.loginForm.value.url;
    this.description = this.loginForm.value.description;
    this.page = this.loginForm.value.page
    // console.log(this.loginForm.value);
    if (this.videosService.urlInputValidation(this.url , this.type)) {
      if (this.videosService.sortValidation(this.url) ) {
        this.url = this.videosService.fixUrl(this.url, this.type);
      }
      this.video = new Video(this.name, this.url, this.type, this.description, "", this.page  )
      console.log("my URL bitch: ", this.url);
      this.ServerHandelerService.storeVideo(this.video)
        .subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
      
    }else {
      
      this.submited = false;
      this.urlValid = false;

    }
  
  }
}