import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController, ViewController } from 'ionic-angular';
import { Camera, Crop } from 'ionic-native';
import { contactsOfKampagnePage } from '../contactsOfKampagne/contactsOfKampagne';
import Tesseract from 'tesseract.js';

@Component({
    selector: 'page-reader-page',
    templateUrl: 'reader-page.html',
})
export class ReaderPage {
    srcImage: string;
    callback: any;
    OCRAD: any;
    tabBarElement: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
        public viewCtrl: ViewController) {

        this.srcImage = navParams.get('img');
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }

    ionViewWillEnter() {
        this.tabBarElement.style.display = 'none';
        this.callback = this.navParams.get("callback")
    }

    ionViewDidLoad() {
        this.viewCtrl.setBackButtonText('Cancel');
    }

    ionViewWillLeave() {
        this.tabBarElement.style.display = 'flex';
    }

    analyze() {
        let loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        (<any>window).OCRAD(document.getElementById('image'), text => {
            loader.dismissAll();
            alert(text);
            console.log(text);
        });
    }

    restart() {
        this.srcImage = '';
        this.navCtrl.pop();
        //this.callback(this);
      
    }

    back() {
        this.navCtrl.pop(this.navCtrl.getActive().component);
    }
}