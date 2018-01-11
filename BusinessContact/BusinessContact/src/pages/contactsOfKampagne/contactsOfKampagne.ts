import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { KampagnePage } from '../kampagne/kampagne'
import { ReaderPage } from '../reader-page/reader-page';

@Component({
    selector: 'page-contactsOfKampagne',
    templateUrl: 'contactsOfKampagne.html',
})
export class contactsOfKampagnePage {
    item: any;
    srcImage: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {

        this.item = navParams.get('item');
    }
    
    presentActionSheet() {
       const actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.getPicture(1); // 1 == Camera
                        this.pushPage();
                    }
                }, {
                    text: 'Choose Photo',
                    icon: 'image',
                    handler: () => {
                        this.getPicture(0); // 0 == Libary
                        this.pushPage();
                        
                    }
                }, {
                    text: 'Demo Photo',
                    icon: 'attach',
                    handler: () => {
                        this.srcImage = 'assets/demo.png';
                        this.pushPage();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    ionViewWillEnter() {
        this.srcImage = null;
    }

    pushPage() {
         this.navCtrl.push(ReaderPage, {
           img: this.srcImage,
           callback: this.presentActionSheet
          
        }

    }

    getPicture(sourceType: number) {
        Camera.getPicture({
            quality: 100,
            destinationType: 0, // DATA_URL
            sourceType,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then((imageData) => {
            this.srcImage = `data:image/jpeg;base64,${imageData}`;
        }, (err) => {
            console.log(`ERROR -> ${JSON.stringify(err)}`);
        });
    }

}