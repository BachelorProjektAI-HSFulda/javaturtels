import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { synchronisationPage } from '../synchronisation/synchronisation';


import { accountInformationPage } from '../accountInformation/accountInformation';

/*
  Generated class for the settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class settingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public alertCtrl: AlertController){}
    
    public rangeObject: any = { lower: 0, upper: 100 };

    ionViewDidLoad() {
        console.log('ionViewDidLoad settingsPage');
    }



    deleteAll() {

        let confirm = this.alertCtrl.create({
            title: 'delete all?',
            message: 'Are you sure you want to delete all your contact?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        alert('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        alert('Yes clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    shareContact() {

        alert('share contact');
    }

    goToSynchronisation() {
        this.navCtrl.push(synchronisationPage);
    }

    goToInfo()
    {
        this.navCtrl.push(accountInformationPage); 
    }

   }

