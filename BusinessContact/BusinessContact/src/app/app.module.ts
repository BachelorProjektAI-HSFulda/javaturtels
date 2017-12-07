import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { KampagnePage} from '../pages/kampagne/kampagne';
import { TabsPage } from '../pages/tabs/tabs';
import {voicePage } from '../pages/voice/voice';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    KampagnePage,
    TabsPage,
    voicePage
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
    voicePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
