import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { anmeldungPage } from '../pages/anmeldung/anmeldung';
import { profilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { helpPage } from '../pages/help/help'; 
import { settingsPage}from'../pages/settings/settings'; 
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;
    @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    }


  signOut()
  {
      this.nav.setRoot(anmeldungPage); 
  }

  goToprofil()
  {
      this.nav.push(profilePage);
  }

  gotoHelp()
  {
      this.nav.push(helpPage);
  }

  goToShare()
  {
      alert("Share Contakt or Campaign"); 
  }

  goToSettings()
  {
      this.nav.push(settingsPage); 
  }
}
