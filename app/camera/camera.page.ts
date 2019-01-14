import { Component, OnInit } from '@angular/core';

import {Camera,CameraOptions} from '@ionic-native/camera/ngx'
import { RestapiService } from '../restapi.service';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { create } from 'domain';
import {Router} from '@angular/router';

declare var window;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  private base64Image: string; //Image data

  constructor(private api: RestapiService, private camera: Camera, private photoLibrary: PhotoLibrary,
              private router: Router) { 
  }
  
  
  
  
  ngOnInit() {
    // this.photoLibrary.requestAuthorization().then(() => {
    //   this.photoLibrary.getLibrary().subscribe({
    //     next: library => {
    //       library.forEach(function(libraryItem) {
    //         console.log(libraryItem.id);          // ID of the photo
    //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
    //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
    //         console.log(libraryItem.fileName);
    //         console.log(libraryItem.width);
    //         console.log(libraryItem.height);
    //         console.log(libraryItem.creationDate);
    //         console.log(libraryItem.latitude);
    //         console.log(libraryItem.longitude);
    //         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
    //       });
    //     },
    //     error: err => { console.log('could not get photos'); },
    //     complete: () => { console.log('done getting photos'); }
    //   });
    //   this.photoLibrary.getAlbums();
    // })
    // .catch(err => console.log('permissions weren\'t granted'));
    
    let new1 = document.getElementById('new1')
    let new2 = document.getElementById('new2')
    let new3 = document.getElementById('new3')
    
    let i=0
    for (i;i<this.api.User.task.todo.length;i++){
    let newa1 = document.createElement('ion-select-option')
    newa1.innerText = this.api.User.task.todo[i];
    new1.appendChild(newa1)
  }
    
    let x=0
    for (x;x<this.api.User.task.todo.length;x++){
    let newa2 = document.createElement('ion-select-option')
    newa2.innerText = this.api.User.task1.todo[x];
    new2.appendChild(newa2)
  }
    
    let y=0
    for (y;y<this.api.User.task.todo.length;y++){
    let newa3 = document.createElement('ion-select-option')
    newa3.innerText = this.api.User.task2.todo[y];
    new3.appendChild(newa3)
  }
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

  goToHome () { if (this.api.User.level < 10){
    this.router.navigate(['/home'])}
    else if (this.api.User.level >= 10 ) {

    this.router.navigate(['/home1'])}
  }


  // goToGallery() {
    // this.photoLibrary.requestAuthorization().then(() => {
    //   this.photoLibrary.getLibrary().subscribe({
    //     next: library => {
    //       library.forEach(function(libraryItem) {
    //         console.log(libraryItem.id);          // ID of the photo
    //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
    //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
    //         console.log(libraryItem.fileName);
    //         console.log(libraryItem.width);
    //         console.log(libraryItem.height);
    //         console.log(libraryItem.creationDate);
    //         console.log(libraryItem.latitude);
    //         console.log(libraryItem.longitude);
    //         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
    //       });
    //     },
    //     error: err => { console.log('could not get photos'); },
    //     complete: () => { console.log('done getting photos'); }
    //   });
    //   this.photoLibrary.getAlbums();
    // })
    // .catch(err => console.log('permissions weren\'t granted'));
  
    
  // }

}