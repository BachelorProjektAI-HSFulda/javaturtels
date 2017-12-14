import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';

/*
  Generated class for the sign_in page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-sign_in',
    templateUrl: 'sign-in.html'
})
export class sign_inPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad sign_inPage');
    }

    goBack()
    {
        this.navCtrl.setRoot(anmeldungPage);
    }
    

}
