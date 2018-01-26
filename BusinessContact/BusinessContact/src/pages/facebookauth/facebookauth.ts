import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'



@Component({
    selector: 'page-facebookAuth',
    templateUrl: 'facebookAuth.html'
})
export class facebookAuthPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad pagePage');

    }
}