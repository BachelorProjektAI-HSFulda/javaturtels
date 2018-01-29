import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
    private contacts: { name: string, vorname: string, firma: string, street: string, plz:string, ort: string, telefon: string, mobil: string, email: string, homepage: string }[] = [];

    constructor(private storage: Storage) { }

    addContact(contact: { name: string, vorname: string, firma: string, street: string, plz:string, ort: string, telefon: string, mobil: string, email: string, homepage: string }) {
        this.contacts.push(contact);
        this.storage.set('contacts', this.contacts);
    }

    getContact() {
        return this.storage.get('contacts')
            .then(
            (contacts) => {
                this.contacts = contacts == null ? [] : contacts;
                return this.contacts.slice();
            }); 
    }

    showContact() {
        return this.contacts.slice();
    }

    removeContact(item) {
        let index = this.contacts.indexOf(item);
        this.contacts.splice(index, 1);
        this.storage.set('contacts', this.contacts);
    }
}