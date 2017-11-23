import { Component } from '@angular/core';
import { Camera, cameraOptions} from '@ionic-native/camera'
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-startseite',
  templateUrl: 'startseite.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLink(url: string) {
    window.open(url);
  }

 
}
