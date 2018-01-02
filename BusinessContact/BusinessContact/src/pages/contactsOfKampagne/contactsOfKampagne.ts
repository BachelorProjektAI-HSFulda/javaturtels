import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KampagnePage } from '../kampagne/kampagne'

@Component({
    selector: 'page-contactsOfKampagne',
    templateUrl: 'contactsOfKampagne.html',
})
export class contactsOfKampagnePage {
    item: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
    }

}