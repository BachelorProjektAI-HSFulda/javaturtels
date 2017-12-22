import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { searchPage } from '../search/search';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { contactProfilePage } from '../contactProfile/contactProfile'; 
import { camerSeitePage } from '../camerSeite/camerSeite'; 
import { Tesseract } from 'tesseract.ts'; 


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   
    public base64Image: string; 

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
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.CAMERA
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
         
      }, (err) => {
          // Handle error
      });
  }


   ocrTest()
   {

       Tesseract
           .recognize(this.base64Image)
           .progress(console.log)
           .then((res: any) => {
               console.log(res);
           })
           .catch(console.error);
   }

   }

 
  

