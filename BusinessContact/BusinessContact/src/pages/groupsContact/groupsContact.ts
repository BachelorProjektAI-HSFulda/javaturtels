import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {groupsPage} from '../groups/groups'; 

/*
  Generated class for the groupsContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-groupsContact',
    templateUrl: 'groupsContact.html'
})
export class groupsContactPage {

    public Title: any; 

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        this.Title = navParams.get('Title'); 
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad groupsContactPage');
    }


    sync()
    {
        alert("Synchronise contact from Campaign");
    }

}
