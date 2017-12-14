import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {searchPage} from '../search/search';
/*
  Generated class for the groups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-groups',
	templateUrl: 'groups.html'
})

export class groupsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	items = [

		'Messen',

		'Meetings',

		'Bla',

		'Bla',
	]

	itemSelected(item: string) {

		console.log("Selected Item", item);

	}

    ionViewDidLoad() {
        console.log('ionViewDidLoad groupsPage');
    }


    newGroup()
    {
        alert("Create a new Group"); 
    }

    search()
    {
        this.navCtrl.push(searchPage);
    }
	
}



