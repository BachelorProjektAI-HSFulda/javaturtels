import { Component } from '@angular/core';
import { NavController, AlertController , LoadingController, ActionSheetController} from 'ionic-angular';
import { searchPage } from '../search/search';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { contactProfilePage } from '../contactProfile/contactProfile'; 
import { camerSeitePage } from '../camerSeite/camerSeite'; 
import { imgWahlPage } from '../imgWahl/imgWahl'; 
import { audioPage } from '../audioPage/audioPage';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


    public base64Image: string; 
    public textOutput: any;

    constructor(public navCtrl: NavController, private alert: AlertController, 
        private camera: Camera, public loadingCtrl: LoadingController, public actionCtrl: ActionSheetController, private media: Media) {

    }

    choosePhoto()
    {
        this.navCtrl.push(imgWahlPage);
    }

    goToRecorder() {

        this.navCtrl.push(audioPage);

    }
   
    gotoCamera()
    {
        this.navCtrl.push(camerSeitePage); 
    }
  

  search()
  {
      this.navCtrl.push(searchPage);

  }

  

   takePicture()
  {
      const options: CameraOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.PNG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          this.base64Image = 'data:image/jpeg;base64,' + imageData;
         
      }, (err) => {
          // Handle error
      });
  }

   newContact()
   {
       let actionSheet = this.actionCtrl.create({
           title: 'Add Contact',
           buttons: [
               {
                   text: 'Take Photo',
                   role: 'Take  Photo',
                   handler: () => {
                      this.gotoCamera();
                   }
               }, {
                   text: 'Choose Photo',
                   handler: () => {
                       this.choosePhoto();
                   }
               }, {
                   text: 'Cancel',
                   role: 'cancel',
                   handler: () => {
                     
                   }
               }
           ]
       });
       actionSheet.present();
   }
   }
  

   

   

 
  

