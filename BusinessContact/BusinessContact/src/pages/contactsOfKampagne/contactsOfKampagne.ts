import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController, Platform } from 'ionic-angular';
import { SQLite } from "ionic-native";
import { KampagnePage } from '../kampagne/kampagne'; 
import { cameraOfcampagnePage } from '../cameraOfcampagne/cameraOfcampagne'; 
import { contactDetails } from '../contact-details/contact-details';
import { NewContactPage } from '../newContact/newContact';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'page-contactsOfKampagne',
    templateUrl: 'contactsOfKampagne.html',
})
export class contactsOfKampagnePage {
    item: any;
    srcImage: string;
    contacts: { name: string, firma: string, street: string, ort: string, telefon: string, mobil: string, email: string, homepage: string }[] = [];
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController,
        private contactService: ContactService) {

        this.item = navParams.get('item');
    }

    ionViewDidEnter() {
        this.contactService.getContact()
            .then(
            (contacts) => this.contacts = contacts
            );
    }

    takePicture()
    {
       this.navCtrl.push(cameraOfcampagnePage); 
    }

    newContact() {
       this.navCtrl.push(NewContactPage);
       
    }

    onItemSelected(item) {
        let index = this.contacts.indexOf(item);
        this.navCtrl.push(contactDetails, { item: this.contacts[index] });

    }

    edit() {
        alert("Edit!")
    }

    delete(item) {
          let index = this.contacts.indexOf(item);

          if (confirm("Are you sure, this Contact will be deleted?") == true) {
              if (index > -1) {
                  this.contacts.splice(index, 1);
                  this.contactService.removeContact(item);
              }
          } else {
              // do nothing
          }
    }

 }

