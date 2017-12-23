import { Component } from '@angular/core';
import { NavController, AlertController , LoadingController} from 'ionic-angular';
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

    OCRAD: any; 
    public base64Image: string; 
    public textOutput: any;

    constructor(public navCtrl: NavController, private alert: AlertController, 
    private camera : Camera, public loadingCtrl : LoadingController) {

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


   ocrTest()
   {
       let loader = this.loadingCtrl.create({
           content: 'Please wait...'
       });
 
       loader.present();
       Tesseract
           .recognize(this.base64Image)
           .then(function (result){
           alert(result)
       })
   }

   analyze() {
       let loader = this.loadingCtrl.create({
           content: 'Please wait...'
       });
       loader.present();
       (<any>window).OCRAD(document.getElementById('image'), text => {
           loader.dismissAll();
           alert(text);
           console.log(text);
       });
   }

   }

 
  

