import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    public photos: any;
    public base64Image: String;



  constructor(public navCtrl: NavController, private camera:Camera, private alert: AlertController) {

    }

  ng0nInit()
  {
      this.photos = [];
  }

  newContact()
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

  deleteContact(index)
  {
      let confirm = this.alert.create({
          title: 'Delete Contact?',
          message: 'Do you realy want to delete this Contact?',
          buttons: [
              {
                  text: 'No',
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

  search()
  {
      alert("search Contact or group"); 
  }

}
