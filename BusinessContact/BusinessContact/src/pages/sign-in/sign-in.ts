import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { anmeldungPage } from '../anmeldung/anmeldung';
import { TabsPage } from '../tabs/tabs';
<<<<<<< HEAD
import { Facebook } from '@ionic-native/facebook'
import { Component, NgModule, Input } from '@angular/core';

=======
import { NgModule } from '@angular/core';
>>>>>>> ee6b571851eb5e5e6b7d737d549c3eb73a298256


@Component({
    selector: 'page-sign_in',
    templateUrl: 'sign-in.html'
})
export class sign_inPage {
  


    constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController) { }

    gotoFace()
    {
        alert("go to Facebook"); 
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

    signIn()
    {
        this.navCtrl.setRoot(TabsPage); 
    }

}



