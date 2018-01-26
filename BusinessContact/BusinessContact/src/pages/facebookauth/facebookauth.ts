import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';



@Component({
    selector: 'page-facebookAuth',
    templateUrl: 'facebookAuth.html'
})
export class facebookAuthPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad pagePage');
    }
    facebookLogin(): Promise < any > {
         return this.facebook.login(['email']);
    }
}
