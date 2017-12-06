import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

@Component({
  selector: 'page-voicerecord',
  templateUrl: 'voicerecord.html'
})
export class VoicerecorderPage{

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController) {

  }

    public startRecordning() {
        try {
            let media = new MediaPlugin('C:\Users\Daniel\Desktop\Bachelor Projekt\javaturtels\BusinessContact\BusinessContact\audiodata\dummyaudio.wav');
            media.startRecord();
        }
        catch (e) {
            this.showAlert('Could not start recording!');
        }

    }

  showAlert(message) {
      let alert = this.alertCtrl.create({
          title: 'Recording Error',
          subTitle: message,
          buttons: ['Kann man nix machen :(']
      });
      alert.present()
  }

      })
  }

}
