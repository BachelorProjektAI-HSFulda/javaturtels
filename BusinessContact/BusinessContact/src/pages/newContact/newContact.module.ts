import { NgModule } from '@angular/core';
//import { IonicPageModule } from 'ionic-angular';
import { NewContactPage } from './newContact';

@NgModule({
    declarations: [
        NewContactPage,
    ],
    imports: [
        //IonicPageModule.forChild(NewContactPage),
    ],
    entryComponents: [
        //IonicPageModule
    ]
})
export class NewContactPageModule { }
