import { Injectable } from '@angular/core';
import { contactclass} from '../provider/contactclass'; 

/*
  Generated class for the contactData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class contactData
{
    contacts: Array<contactclass> = []; 

    constructor()
 {
        console.log('Hello contactData Provider');
    }


    addContact(name, number)
    {
        const contact = new contactclass(name.value, number.value);
        this.contacts.push(contact);
        name.value = '';
        number.value = '';

    }

}
