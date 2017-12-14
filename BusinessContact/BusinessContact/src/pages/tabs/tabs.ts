import { Component } from '@angular/core';
import { MediaPlugin } from 'ionic-native';
import { KampagnePage } from '../kampagne/kampagne';
import { ContactPage } from '../contact/contact';
import { groupsPage } from '../groups/groups';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = ContactPage;
    tab2Root: any = KampagnePage;
    tab3Root: any = groupsPage;


    constructor() {

    }
}
 
