import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-contact-details',
    templateUrl: 'contact-details.html',
})
export class contactDetails {
    item: any;
    srcImage: string;

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        this.item = navParams.get('item');
    }

    

}

