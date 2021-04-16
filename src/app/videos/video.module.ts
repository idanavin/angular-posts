export interface Videos {
  [key: string]: Video;
}

export class Video {
  public name: string;
  public url: string; // Dont need id? maybe just url?
  public description: string;
  public type: string;
  public id: string;
  public page: string;
  // public correctedUrl: string;

  constructor(name: string, url: string, type: string, desc: string, id='none', page: string = 'weddings'){
    this.name = name;
    this.description = desc;
    this.url = url;
    // this.correctedUrl = correctedUrl;
    this.type = type;
    this.page = page;
    
  }
  
}



