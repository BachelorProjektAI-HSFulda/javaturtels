import { Component } from '@angular/core';
import { kampagneSearchPage } from '../kampagneSearch/kampagneSearch';

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

  newCampaign()
  {
      alert("new Campaign"); 
  }

  search()
  {
      this.navCtrl.push(kampagneSearchPage);
  }
}