import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { sign_upPage } from '../sign-up/sign-up';
import { sign_inPage} from '../sign-in/sign-in'; 

/*
  Generated class for the anmeldung page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-anmeldung',
    templateUrl: 'anmeldung.html'
})
export class anmeldungPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad anmeldungPage');
    }

    signIn()
    {
        this.navCtrl.setRoot(sign_inPage); 
    }

    signUp()
    {
        this.navCtrl.setRoot(sign_upPage);
    }

}
