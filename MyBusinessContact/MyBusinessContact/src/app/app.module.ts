import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/startseite/startseite';
import { CampaignPage } from '../pages/kampagne/kampagne';
import { GroupPage } from '../pages/gruppe/gruppe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampaignPage,
    GroupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampaignPage,
    GroupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
