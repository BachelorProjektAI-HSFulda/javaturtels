import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField, ContactAddress, ContactOrganization } from 'ionic-native';

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
        email: '',
        address: '',
        profession: '',
        orgaName: '',
        street: '', 
        persPost: '',
        local: '',
        pays: '',
        etat: '', 
        url:''
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

        

        contact.addresses = [new ContactAddress(
            true, null, null, newct.street, newct.local,
            newct.etat, newct.persPost,newct.pays)]; 

        

        contact.urls = [new ContactField(null,
            newct.url, true)]; 
        
       
        contact.organizations = [new ContactOrganization(
            null, newct.orgaName, null, newct.profession, true)]; 
        
            
        contact.save().then((contact) => {
            alert('saved');
        }, (error) => {
            alert(error);
        })

    }

}
