import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { KampagnePage} from '../pages/kampagne/kampagne';
import { TabsPage } from '../pages/tabs/tabs';
import { VoicerecorderPage } from '../pages/voicerecord/voicerecord';

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
