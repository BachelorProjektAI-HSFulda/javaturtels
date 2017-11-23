import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-kampagne',
  templateUrl: 'kampagne.html'
})
export class CampaignPage {

  constructor(public navCtrl: NavController) {

  }

  onLink(url: string)
  {
    window.open(url);
  }


  

}
