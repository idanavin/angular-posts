import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Video } from '../videos/video.module';
import { VideosService } from '../shared/videos.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  
})
export class VideosComponent implements OnInit, AfterContentChecked {
  @Input() page: string;
  showEditForm = false;
  EditButtonContent = false;
  videosArray: Video[] = [];
  serverHendelerService: any;
  confirmAnswer: boolean;
  @Input() isLogged = false;
  videoUrl: any = '';

  constructor(private videosService: VideosService) {

  }

  ngOnInit() {
    this.videosArray = this.videosService.getPageVideos(this.page);
  }

  ngAfterContentChecked() {

  }

  onEdit() {
    this.showEditForm = !this.showEditForm;
    this.EditButtonContent = !this.EditButtonContent;
  }

  onDelete(id) {
    //In case we want delete message
    ////////////////////////////
    // const onSuccess = () => {
    //   this.deleted = true;
    //   console.log("this this.deleted", this.deleted);
      
    // };

    this.confirmAnswer = confirm('אישור מחיקת סרטון');
    if (this.confirmAnswer) {
      this.videosService.deleteVideosFromServer(id);
      location.reload();
    }

  }
}
