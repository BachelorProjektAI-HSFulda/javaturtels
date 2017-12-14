import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the anmeldung page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-anmeldung',
    templateUrl: 'anmeldung.html'
})
export class anmeldungPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad anmeldungPage');
    }

    signIn()
    {
        alert("you have clicked on sign In"); 
    }

    signUp()
    {
        alert("you have clicked on sign Up");
    }

}
