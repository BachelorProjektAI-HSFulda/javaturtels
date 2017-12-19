import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the groupsSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-groupsSearch',
    templateUrl: 'groupsSearch.html'
})
export class groupsSearchPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad groupsSearchPage');
    }

}
