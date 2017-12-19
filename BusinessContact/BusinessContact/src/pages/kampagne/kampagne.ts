import { Component } from '@angular/core';
import { kampagneSearchPage } from '../kampagneSearch/kampagneSearch';

import { NavController, ActionSheetController } from 'ionic-angular';
import { NeueKampagnePage } from "../neueKampagne/neueKampagne";
import { KampagneService } from "../../services/kampagne.service";

@Component({
  selector: 'page-kampagne',
  templateUrl: 'kampagne.html'
})
export class KampagnePage {
    items: { title: string }[] = [];

    constructor(public navCtrl: NavController, private kampagneService: KampagneService) {

  }
  
  onLink(url: string) {
      window.open(url);
    }

  ionViewWillEnter() {
      this.items = this.kampagneService.getKampagne();
  }

  newCampaign()
  {
      this.navCtrl.push(NeueKampagnePage);
  }

  editKampagne() {
      alert("Edited!")
  }

  deleteKampagne(item) {
      if (confirm("Are you sure, this Campaign will be deleted?") == true) {
          (this.items).splice(item, 1);
      } else {
          // do nothing
      }
  }

  search()
  {
      this.navCtrl.push(kampagneSearchPage);
  }
}