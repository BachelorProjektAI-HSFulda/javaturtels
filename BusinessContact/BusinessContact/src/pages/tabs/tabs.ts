import { Component } from '@angular/core';
import { MediaPlugin } from 'ionic-native';
import { KampagnePage } from '../kampagne/kampagne';
import { ContactPage } from '../contact/contact';
import { groupsPage } from '../groups/groups';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    tab1Root: any = ContactPage;
    tab2Root: any = KampagnePage;
    tab3Root: any = groupsPage;


  constructor() {

    }

  recordVoice()
    {
   let audioObject: MediaObject = this.media.create(this.fileName);

audioObject.startRecord();
console.log('cache dir: ' + this.file.cacheDirectory);
console.log('start recording' + this.fileName);
   setTimeout(() => {
    audioObject.stopRecord();
    console.log('duration: ' + audioObject.getDuration());
    audioObject.release();
    console.log('done recording' + this.fileName);
    
},);
  }

}


playaudiofile()
{

}

  showAlert(message) {
      let alert = this.alertCtrl.create({
          title: 'Recording Error',
          subTitle: message,
          buttons: ['Aufnahme fehlgeschlagen']
      });
      alert.present()
  }
 
