import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-gruppe',
  templateUrl: 'gruppe.html'
})
export class GroupPage {

  constructor(public navCtrl: NavController) {

  }

  onLink(url: string) {
    window.open(url);
  }

 
}
