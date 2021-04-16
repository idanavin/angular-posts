import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video, Videos } from '../videos/video.module';
import { VideosService } from './videos.service';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {
  
  // videos: Video[] = []
  
  constructor(private http: HttpClient) { }

  storeVideo(video: Video) {
    return this.http.post(`${env.realTimeDataBaseURL}/data.json`, video);
  }

  getVideosFromServer() {
    return this.http.get<Videos>(`${env.realTimeDataBaseURL}/data.json`)
    .pipe(
      map((videosData: Videos) => {
        const videosArray: Video[] = [];
        Object.keys(videosData).forEach((videoId) => {
          videosArray.push({ ...videosData[videoId], id: videoId});
        });
        return videosArray;
      })
    );
  }

  deleteVideoFromServer(id: string) {
    return this.http.delete(`${env.realTimeDataBaseURL}/data/${id}.json`); 
  }

  editVideoOnServer(id: string, video: Video) {
    return this.http.put(`${env.realTimeDataBaseURL}/data/${id}.json`, video);
  }
}








