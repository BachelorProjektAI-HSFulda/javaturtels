import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';
import { TabsPage } from '../tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


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
    userData: any;


    constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController, private facebook: Facebook) { }

    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
            });
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad sign_inPage');
    }

    goBack()
    {
        this.navCtrl.setRoot(anmeldungPage);
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



