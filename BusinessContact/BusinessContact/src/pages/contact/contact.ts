import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    public photos: any;
    public base64Image: String;



    constructor(public navCtrl: NavController, private camera: Camera, private alert: AlertController, public actionSheetCtrl: ActionSheetController) {

    }

  ng0nInit()
  {
      this.photos = [];
  }


  

  search()
  {
      alert("search Contact or group"); 
  }

  newContact()
  {
      alert("creat a new Contact")
  }

}
