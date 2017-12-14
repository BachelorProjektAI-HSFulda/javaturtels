import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';
/*
  Generated class for the sign_up page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-sign_up',
    templateUrl: 'sign-up.html'
})
export class sign_upPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad sign_upPage');
    }

    goBack()
    {
        this.navCtrl.setRoot(anmeldungPage); 
    }

    goToFace()
    {
        alert("connect with FaceBook");
    }

    goToGoo()
    {
        alert("connect with Google");
    }

    goToGit()
    {
        alert("connect with Github");
    }

    goToWin()
    {
        alert("connect with windows");
    }

    createAccount()
    {
        alert("create Account");
    }
}
