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
import { sign_upPage } from '../pages/sign-up/sign-up'; 
import { sign_inPage} from '../pages/sign-in/sign-in';

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
      sign_inPage,
    sign_upPage
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
      sign_upPage,
      sign_inPage
  ],
  providers: [
  Camera,
      { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
