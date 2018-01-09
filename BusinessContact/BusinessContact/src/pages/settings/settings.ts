﻿import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    public rangeObject: any = { lower: 0, upper: 100 };

    ionViewDidLoad() {
        console.log('ionViewDidLoad settingsPage');
    }

}
