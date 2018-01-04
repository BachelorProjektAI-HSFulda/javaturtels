import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
    selector: 'page-reader-page',
    templateUrl: 'reader-page.html',
})
export class ReaderPage {
    srcImage: string;
    OCRAD: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {

        this.srcImage = navParams.get('img');
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
        //this.presentActionSheet();
    }

    back() {
        this.navCtrl.pop(this.navCtrl.getActive().component);
    }
}