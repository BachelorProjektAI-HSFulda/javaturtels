import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';
import { TabsPage } from '../tabs/tabs';

 
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
        this.navCtrl.setRoot(TabsPage);
    }
}
