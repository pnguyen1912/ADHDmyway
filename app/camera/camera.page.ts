import { Component, OnInit } from '@angular/core';

import {Camera,CameraOptions} from '@ionic-native/camera/ngx'
import { ApiService } from '../api.service';

declare var window;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  private base64Image: string; //Image data

  constructor(private api:ApiService, private camera: Camera) { }

  
  takephoto(){
  }

  ngOnInit() {
    
    const option:CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(option).then((imageData) => {
      this.base64Image = window.Ionic.WebView.convertFileSrc(imageData);
      
    },(err) => {console.log(err)} )
  }

}
