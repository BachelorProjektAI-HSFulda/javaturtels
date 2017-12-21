import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import  { TabsPage } from '../tabs/tabs';
/*
  Generated class for the camerSeite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-camerSeite',
    templateUrl: 'camerSeite.html'
})
export class camerSeitePage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
    private camera: Camera)
    { 
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });

    }


    goBack()
    {
        this.navCtrl.setRoot(TabsPage);
    }
}

    


