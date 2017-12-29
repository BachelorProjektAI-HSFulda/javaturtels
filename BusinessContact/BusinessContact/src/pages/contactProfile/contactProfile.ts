import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'; 
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

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


    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad contactProfilePage');
    }

    cancel() {
        let confirm = this.alertCtrl.create({
            title: 'Do you really want to Cancel?',
            message: '',
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


    save() {
        alert("Save Contact");
    }
}
export class audioRecorder {


    constructor(private media: Media, private file: File) { }


    recordAudio() {

        this.file.createFile(this.file.tempDirectory, 'my_audio.m4a', true).then(() => {
            let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_audio.m4a');
            file.startRecord();
            window.setTimeout(() => file.stopRecord(), 10000);
        });
        }

    }








