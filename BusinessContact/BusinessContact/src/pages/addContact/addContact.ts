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
        local : ''
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


        //var contactAdress = new ContactAddress(); 
        //contactAdress.streetAddress = newct.street; 
        ////contactAdress.postalCode = newct.persPostal; 
        ////contactAdress.locality = newct.local; 
        //contactAdress.pref = true; 
        ////ContactAddress.bind(newct.street, newct.persPostal, newct.local); 

        //var addresSection = [];
        //addresSection.push(contactAdress.streetAddress); 
        ////addresSection.push(contactAdress.postalCode); 
        ////addresSection.push(contactAdress.locality); 
        //contact.addresses = addresSection; 


        //var organisation = new ContactOrganization()
        //organisation.name = newct.orgaName; 
        //organisation.title = newct.profession; 
        //organisation.pref = true; 
        ////ContactOrganization.bind(newct.orgaName, newct.profession); 


        //var organisationSection = []; 
        //organisationSection.push(organisation.name);
        //organisationSection.push(organisation.title);

        //contact.organizations = organisationSection; 

        
            
        contact.save().then((contact) => {
            alert('saved');
        }, (error) => {
            alert(error);
        })

    }

}
