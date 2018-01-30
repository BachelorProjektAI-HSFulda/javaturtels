import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { contactData } from '../provider/contactData'; 
import { ContactPage } from '../contact/contact'; 
/*
  Generated class for the addContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-addContact',
    templateUrl: 'addContact.html'
})
export class addContactPage {
   

    constructor(public navCtrl: NavController, public navParams: NavParams, 
private cntData : contactData) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad addContactPage');
    }


    addcontact(name, number, email, address, postalCode, ville, url, organisation, role)
    {
        this.cntData.addContact(name, number, email, address, postalCode, ville, url, organisation, role); 
        this.navCtrl.setRoot(ContactPage); 
    }
    

}
