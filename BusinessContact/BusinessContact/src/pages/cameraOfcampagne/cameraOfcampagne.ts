import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the cameraOfcampagne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-cameraOfcampagne',
    templateUrl: 'cameraOfcampagne.html'
})
export class cameraOfcampagnePage {

    public base64Image: any; 


    constructor(public navCtrl: NavController, public navParams: NavParams,
        private camera : Camera)
    {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad cameraOfcampagnePage');
    }


    gotoNewContact()
    {
        alert("create Contact"); 
    }

    analyze()
    {
        alert("OCR read"); 
    }

}
