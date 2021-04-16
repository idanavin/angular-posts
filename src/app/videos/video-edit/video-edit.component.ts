import { Component, OnInit, ViewChild, Input, HostBinding, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Video } from '../video.module';
import { VideosService } from 'src/app/shared/videos.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

  @ViewChild('f', { static: false }) form: NgForm;
  @Input() video: Video;
  urlValid = true;
  edittedVideo: Video;
  name: string;
  url: string;
  type: string;
  description: string;
  page: string;
  
  changesDone  = false;
  submited = false;

  
  constructor(private videosService: VideosService) { }
  
  ngOnInit() {
    
    this.name = this.video.name;
    this.type = this.video.type;
    this.page = this.video.page;
    this.url = this.video.url;
    this.description = this.video.description;
    console.log ('ID OF THE VIDEO ' , this.video.id);
  }
  
  checkType(type: string) {
    return type === this.video.type
    
  }

  onSubmit() {
    //For edit successful message
    const onSuccess = () => {
      this.changesDone = true;
    };

    this.submited = true;
    this.name = this.form.value.name;
    this.type = this.form.value.type;
    this.url = this.form.value.url;
    this.description = this.form.value.description;
    this.page = this.form.value.page
    console.log(this.form.value);


    // if (this.videosService.urlInputValidation(this.url , this.type)) {
    //   if (this.videosService.sortValidation(this.url) ) {
    //     this.url = this.videosService.fixUrl(this.url, this.type);
    //   }
    //   this.video = new Video(this.name, this.url, this.type, this.description, "", this.page  )
    //   console.log("my URL bitch: ", this.url);
    //   this.ServerHandelerService.storeVideo(this.video)
    //     .subscribe(
    //       (response) => console.log(response),
    //       (error) => console.log(error)
    //     );
      
    // }else {
      
    //   this.submited = false;
    //   this.urlValid = false;

    // }

    if (this.videosService.urlInputValidation(this.url , this.type)) {
      if (this.videosService.sortValidation(this.url) ) {
        this.url = this.videosService.fixUrl(this.url, this.type);
      }
      this.edittedVideo = new Video(this.name, this.url, this.type, this.description, this.video.id, this.page);
      this.videosService.editVideoOnServer(this.video.id, this.edittedVideo, onSuccess);

    }else {
      this.submited = false;
      this.urlValid = false;
    }

   
  }
}
