import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { KampagnePage} from '../pages/kampagne/kampagne';
import { TabsPage } from '../pages/tabs/tabs';
import { groupsPage } from '../pages/groups/groups';
import { Camera } from '@ionic-native/camera';
import { anmeldungPage } from '../pages/anmeldung/anmeldung';
import { profilePage } from '../pages/profile/profile';
import { helpPage } from '../pages/help/help';
import { searchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    KampagnePage,
      TabsPage,
    groupsPage,
    anmeldungPage,
    profilePage,
      helpPage,
      searchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    KampagnePage,
      TabsPage,
      groupsPage,
      anmeldungPage,
      profilePage, 
      helpPage,
      searchPage
  ],
  providers: [
  Camera,
      { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
