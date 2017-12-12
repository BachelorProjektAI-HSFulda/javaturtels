import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-kampagne',
  templateUrl: 'kampagne.html'
})
export class KampagnePage {

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

  }
  
  onLink(url: string) {
      window.open(url);
    }

  newAction() {
      let actionSheet = this.actionSheetCtrl.create({
          title: 'New',
          buttons: [
              {
                  text: 'Contact',
                  role: 'contact',
                  handler: () => {
                      alert("Contact clicked");
                  }
              },
              {
                  text: 'group',
                  handler: () => {
                      alert("group clicked");
                  }
              },
              {
                  text: 'Campaign',
                  handler: () => {
                      alert("Campaign clicked");
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                      alert("Cancel clicked");
                  }
              }
          ]
      });

      actionSheet.present();
  }

}
