import { Injectable } from '@angular/core';


/*
  Generated class for the contactclass provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class contactclass
{

    constructor(public name: string, public number: string, public email: string, public address: string, public postalCode: string, public ville: string,
    public url: string)
    {
        console.log('Hello contactclass Provider');
    }

}
