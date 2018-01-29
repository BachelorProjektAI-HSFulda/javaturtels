import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';



@Component({
    selector: 'page-newContact',
    templateUrl: 'newContact.html',
})
export class NewContactPage {

    constructor(private navCtrl: NavController, private contactService: ContactService) {
    }  

    onAddContact(contact: { name: string, vorname: string, firma: string, street: string, plz:string, ort: string, telefon: string, mobil:string, email: string, homepage: string  }) {
        this.contactService.addContact(contact);
        this.navCtrl.pop();
    }

}
