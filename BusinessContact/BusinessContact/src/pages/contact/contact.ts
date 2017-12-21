import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { searchPage } from '../search/search';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { contactProfilePage } from '../contactProfile/contactProfile';
import { Tesseract } from 'tesseract.js'; 
import { camerSeitePage } from '../camerSeite/camerSeite'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   
    public base64Image: any; 

    constructor(public navCtrl: NavController, private alert: AlertController, 
    private camera : Camera) {

    }

   
    gotoCamera()
    {
        this.navCtrl.setRoot(camerSeitePage); 
    }
  

  search()
  {
      this.navCtrl.push(searchPage);

  }

  newContact()
  {
      this.navCtrl.push(contactProfilePage); 
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
         
      }, (err) => {
          // Handle error
      });
  }

 
  }

