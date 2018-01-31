import { Injectable } from '@angular/core';
import { contactclass } from '../provider/contactclass'; 
import { Storage } from '@ionic/storage'; 

/*
  Generated class for the contactData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class contactData
{
    contacts: Array<contactclass> = []; 

    constructor(private storage : Storage)
 {
        console.log('Hello contactData Provider');
    }


    addContact(name, number, email, address, postalCode, ville, url, organisation, role, tel , note  )
    {
        const contact = new contactclass(name.value, number.value, email.value, address.value, postalCode.value, ville.value, url.value, organisation.value, role.value, tel.value, note.value);
        this.contacts.push(contact);
        name.value = '';
        number.value = '';
        email.value = ''; 
        address.value = '';
        postalCode.value = '';
        ville.value = '';
        url.value = ''; 
        organisation.value = ''; 
        role.value = ' '; 
        tel.value = '';
        note.value = ''

        this.storage.set('contacts', this.contacts); 
    }

    deleteContact(item)
    {
        let index = this.contacts.indexOf(item); 
        this.contacts.splice(index, 0); 
        this.storage.set('contacts', this.contacts); 

    }
}
