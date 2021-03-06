import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/startseite/startseite';
import { CampaignPage } from '../pages/kampagne/kampagne';
import { GroupPage } from '../pages/gruppe/gruppe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  goCampaign(Page)
  {
    this.nav.setRoot(CampaignPage);
  }

  goGroup()
  {
    this.nav.setRoot(GroupPage);
  }

  goHome()
  {
    this.nav.setRoot(HomePage);
  }
}
