import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { KampagnePage } from '../kampagne/kampagne'; 
import { cameraOfcampagnePage } from '../cameraOfcampagne/cameraOfcampagne'; 



@Component({
    selector: 'page-contactsOfKampagne',
    templateUrl: 'contactsOfKampagne.html',
})
export class contactsOfKampagnePage {
    item: any;
    srcImage: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController
    ) {

        this.item = navParams.get('item');
    }

    ionViewWillEnter() {
        this.srcImage = null;
    }

    takePicture()
    {
        this.navCtrl.push(cameraOfcampagnePage); 
    }

    newContact() {
        alert("new contact");
    }

 }

