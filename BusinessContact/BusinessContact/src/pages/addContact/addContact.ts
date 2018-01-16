import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField } from 'ionic-native';

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
    newcontact = {
        displayName: '',
        nickname: '',
        phnumber: '',
        phtype: '',
        email: ''
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad addContactPage');
    }

    addcontact(newct) {
        var contact = Contacts.create();
        contact.displayName = newct.displayName;
        contact.nickname = newct.nickname;
      

        var contactfield = new ContactField();
        contactfield.type = newct.phtype;
        contactfield.value = newct.phnumber;
        contactfield.pref = true;

        var numbersection = [];
        numbersection.push(contactfield);
        contact.phoneNumbers = numbersection;


        var contactfield2 = new ContactField();
        contactfield2.type = newct.phtype; 
        contactfield2.value = newct.email;
        contactfield2.pref = true; 

        var emailsection = [];
        emailsection.push(contactfield2);
        contact.emails = emailsection;
        
            
        contact.save().then((contact) => {
            alert('saved');
        }, (error) => {
            alert(error);
        })

    }

}
