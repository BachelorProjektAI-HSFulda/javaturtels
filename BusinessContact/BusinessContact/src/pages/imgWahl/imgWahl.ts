import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { contactProfilePage } from '../contactProfile/contactProfile';

/*
  Generated class for the imgWahl page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-imgWahl',
    templateUrl: 'imgWahl.html'
})
export class imgWahlPage {

    public base64Image: any; 

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera)
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
        });}



    ionViewDidLoad() {
        console.log('ionViewDidLoad imgWahlPage');
    }

    gotoNewContact()
    {
        this.navCtrl.setRoot(contactProfilePage);
    }

}
