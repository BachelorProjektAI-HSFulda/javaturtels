import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
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
import { groupsSearchPage } from '../pages/groupsSearch/groupsSearch';
import { Camera } from '@ionic-native/camera';
import { NeueKampagnePage } from '../pages/neueKampagne/neueKampagne';
import { KampagneService } from '../services/kampagne.service';
import { ReaderPage } from '../pages/reader-page/reader-page';
import { contactsOfKampagnePage } from '../pages/contactsOfKampagne/contactsOfKampagne';
import { contactDetails } from '../pages/contact-details/contact-details';
import { camerSeitePage } from '../pages/camerSeite/camerSeite'; 
import { imgWahlPage } from '../pages/imgWahl/imgWahl';
import { audioPage } from '../pages/audioPage/audioPage';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';
import { synchronisationPage } from '../pages/synchronisation/synchronisation';
import { accountInformationPage } from '../pages/accountInformation/accountInformation';
import { groupsContactPage } from '../pages/groupsContact/groupsContact';
import { AnimateItemSliding } from '../components/animate-item-sliding.module';
import { cameraOfcampagnePage } from '../pages/cameraOfcampagne/cameraOfcampagne'; 
import { BrowserModule } from '@angular/platform-browser';
import { addContactPage } from '../pages/addContact/addContact';
import { CommonModule } from '@angular/common';
import { MScomputerService } from '../pages/provider/MScomputerService';
import { NewContactPage } from '../pages/newContact/newContact';
import { ContactService } from '../services/contact.service';
import { contactData } from '../pages/provider/contactData'; 
import { contactclass } from '../pages/provider/contactclass'; 
import { contactInformationPage } from '../pages/contactInformation/contactInformation'; 


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
        groupsSearchPage,
        ReaderPage,
        NeueKampagnePage,
        camerSeitePage,
        imgWahlPage,
        contactsOfKampagnePage,
        contactDetails,
        audioPage,
        synchronisationPage,
        accountInformationPage, 
        groupsContactPage,
        AnimateItemSliding,
        cameraOfcampagnePage,
        addContactPage,
        NewContactPage, 
        contactInformationPage
      
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        CommonModule
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
        groupsSearchPage,
        NeueKampagnePage,
        contactDetails,
        ReaderPage,
        camerSeitePage,
        imgWahlPage,
        contactsOfKampagnePage,
        audioPage,
        synchronisationPage,
        accountInformationPage, 
        groupsContactPage,
        cameraOfcampagnePage,
        addContactPage,
        NewContactPage, 
        contactInformationPage
      
    ],
    providers: [
        Camera, KampagneService, Media, File, StatusBar, Splashscreen, Storage,
        MScomputerService, ContactService, contactData, contactclass,
        { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
