import { Component } from '@angular/core';

import { KampagnePage} from '../kampagne/kampagne';
import { ContactPage } from '../contact/contact';
import { groupsPage } from '../groups/groups';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    tab1Root = ContactPage;
    tab2Root = KampagnePage;
    tab3Root = groupsPage;

  constructor() {

    }

  recordVoice()
  {
      alert("Record Your Voice");
  }
}