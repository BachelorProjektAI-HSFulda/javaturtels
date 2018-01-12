import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { KampagnePage } from '../pages/kampagne/kampagne';
import { TabsPage } from '../pages/tabs/tabs';
import { groupsPage } from '../pages/groups/groups';
import { anmeldungPage } from '../pages/anmeldung/anmeldung';
import { profilePage } from '../pages/profile/profile';
import { helpPage } from '../pages/help/help';
import { searchPage } from '../pages/search/search';
import { sign_upPage } from '../pages/sign-up/sign-up';
import { sign_inPage } from '../pages/sign-in/sign-in';
import { settingsPage } from '../pages/settings/settings';
import { kampagneSearchPage } from '../pages/kampagneSearch/kampagneSearch';
import { groupsSearchPage } from '../pages/groupsSearch/groupsSearch';
import { contactProfilePage } from '../pages/contactProfile/contactProfile';
import { Camera } from '@ionic-native/camera';
import { NeueKampagnePage } from '../pages/neueKampagne/neueKampagne';
import { KampagneService } from '../services/kampagne.service';
import { ReaderPage } from '../pages/reader-page/reader-page';
import { contactsOfKampagnePage } from '../pages/contactsOfKampagne/contactsOfKampagne';
import { camerSeitePage } from '../pages/camerSeite/camerSeite'; 
import { imgWahlPage } from '../pages/imgWahl/imgWahl';
import { audioPage } from '../pages/audioPage/audioPage';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { StatusBar, Splashscreen } from 'ionic-native';
import { synchronisationPage } from '../pages/synchronisation/synchronisation';
import { accountInformationPage } from '../pages/accountInformation/accountInformation';
import { groupsContactPage } from '../pages/groupsContact/groupsContact';
import { AnimateItemSliding } from '../components/animate-item-sliding.module';
import {cameraOfcampagnePage} from'../pages/cameraOfcampagne/cameraOfcampagne'; 




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
        searchPage,
        sign_upPage,
        sign_inPage,
        settingsPage,
        kampagneSearchPage,
        groupsSearchPage,
        contactProfilePage,
        ReaderPage,
        NeueKampagnePage,
        camerSeitePage,
        imgWahlPage,
        contactsOfKampagnePage,
        audioPage,
        synchronisationPage,
        accountInformationPage, 
        groupsContactPage,
        AnimateItemSliding,
        cameraOfcampagnePage
      
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
        searchPage,
        sign_upPage,
        sign_inPage,
        settingsPage,
        kampagneSearchPage,
        groupsSearchPage,
        contactProfilePage,
        NeueKampagnePage,
        ReaderPage,
        camerSeitePage,
        imgWahlPage,
        contactsOfKampagnePage,
        audioPage,
        synchronisationPage,
        accountInformationPage, 
        groupsContactPage,
        cameraOfcampagnePage
      
    ],
    providers: [
        Camera, KampagneService, Media, File, StatusBar, Splashscreen,

        { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
