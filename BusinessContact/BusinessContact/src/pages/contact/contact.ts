import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { searchPage } from '../search/search';
import { Camera, CameraOptions } from '@ionic-native/camera'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    public photos: any;
    public base64Image: string; 

    constructor(public navCtrl: NavController, private alert: AlertController, 
    private camera : Camera) {

    }

    ngOnInit()
    {
        this.photos = [];
    }


  

  search()
  {
      this.navCtrl.push(searchPage);

  }

  newContact()
  {
      alert("creat a new Contact")
  }

   takePicture()
  {
      
      const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
          this.photos.push(this.base64Image);
          this.photos.reverse();
      }, (err) => {
          // Handle error
      });
      
  }

  deletePhoto(index)
  {
      

      let confirm = this.alert.create({
          title: 'Delete this photo?',
          message: '',
          buttons: [
              {
                  text: 'NO',
                  handler: () => {
                     
                  }
              },
              {
                  text: 'yes',
                  handler: () => {
                      this.photos.splice(index, 1);
                  }
              }
          ]
      });
      confirm.present();
  }


  }






