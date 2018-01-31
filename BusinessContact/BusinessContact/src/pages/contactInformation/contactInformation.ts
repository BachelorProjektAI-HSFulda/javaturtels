import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the contactInformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-contactInformation',
    templateUrl: 'contactInformation.html'
})
export class contactInformationPage {

   public contactInfo: any; 

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {

        this.contactInfo = this.navParams.get('ContactDetails'); 
        
       
    }

    

}
