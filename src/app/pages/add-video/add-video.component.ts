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

  onSubmit() {
    this.submited = true;
    const formValue = this.loginForm.value;

    // console.log(this.loginForm.value);
    if (this.videosService.urlInputValidation(formValue.url , formValue.type)) {
      if (this.videosService.sortValidation(formValue.url)) {
        this.url = this.videosService.fixUrl(formValue.url, formValue.type);
      }
      this.video = new Video(formValue.name, formValue.url, formValue.type, formValue.description, "", formValue.page);
      this.ServerHandelerService.storeVideo(this.video)
        .subscribe(
          //Need to display success or fail message on page
          (response) => console.log(response),
          (error) => console.log(error)
        );
      
    }else {
      
      this.submited = false;
      this.urlValid = false;

    }
  
  }
}