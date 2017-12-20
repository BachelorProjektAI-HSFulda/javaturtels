import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';
import { TabsPage } from '../tabs/tabs';


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

    constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad sign_inPage');
    }

    goBack()
    {
        this.navCtrl.setRoot(anmeldungPage);
    }

    goToFace() {
        alert("connect with FaceBook");
    }

    goToGoo() {
        alert("connect with Google");
    }

    goToGit() {
        alert("connect with Github");
    }

    goToWin() {
        alert("connect with windows");
    }

    signIn() {
        this.navCtrl.setRoot(TabsPage);
    }

    alerPassVerg()
    {
        let prompt = this.alertCtrl.create({
            title: 'Reset Password',
            message: "",
            inputs: [
                {
                    name: 'E-mail',
                    placeholder: 'E-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        
                    }
                },
                {
                    text: 'reset',
                    handler: data => {
                        this.showAlert(); 
                    }
                }
            ]
        });
        prompt.present();

    }
    showAlert()
    {
        let alert = this.alertCtrl.create({
            title: 'Reset Password',
            subTitle: 'we sent you an E-mail so that you can reset and create a new password',
            buttons: ['OK']
        });
        alert.present();
    }


}



