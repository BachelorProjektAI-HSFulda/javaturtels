import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs' ; 

/*
  Generated class for the contactProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-contactProfile',
    templateUrl: 'contactProfile.html'
})
export class contactProfilePage {


    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad contactProfilePage');
    }

    cancel()
    {
        let confirm = this.alertCtrl.create({
            title: 'Do you really want to Cancel?',
            message:'',
            buttons: [
                {
                    text: 'yes',
                    handler: () => {
                       this.navCtrl.setRoot(TabsPage);
                    }
                },
                {
                    text: 'No',
                    handler: () => {
                        
                    }
                }
            ]
        });
        confirm.present();
    }
        
    
    save()
    {
        alert("Save Contact");
    }

}
