import { Component } from '@angular/core';
import { kampagneSearchPage } from '../kampagneSearch/kampagneSearch';
import { NavController, ActionSheetController } from 'ionic-angular';
import { NeueKampagnePage } from "../neueKampagne/neueKampagne";
import { contactsOfKampagnePage } from "../contactsOfKampagne/contactsOfKampagne"
import { KampagneService } from "../../services/kampagne.service";
import { camerSeitePage } from '../camerSeite/camerSeite';

@Component({
  selector: 'page-kampagne',
  templateUrl: 'kampagne.html'
})
export class KampagnePage {
    items: { title: string }[] = [];
    shouldAnimate: boolean = true;

    constructor(public navCtrl: NavController, private kampagneService: KampagneService) {

    }

    ngOnInit() {
        this.setItems();
    }

    setItems() {
        this.items = this.kampagneService.showKampagne();
    }
  
    onLink(url: string) {
        window.open(url);
    }

    ionViewWillEnter() {
        
        this.kampagneService.getKampagne()
          .then(
           (items) =>  this.items = items
        );    
    }

    ionViewDidLeave() {
        this.shouldAnimate = false;
    }

    newCampaign() {
        this.navCtrl.push(NeueKampagnePage);
    }

    onItemSelected(item) {
        let index = this.items.indexOf(item);
        this.navCtrl.push(contactsOfKampagnePage, { item: this.items[index] });
    }

    editKampagne() {
        alert("Edited!")
    }

    deleteKampagne(item) {
          let index = this.items.indexOf(item);

          if (confirm("Are you sure, this Campaign will be deleted?") == true) {
              if (index > -1) {
                  this.items.splice(index, 1);
                  // remove from service
                  this.kampagneService.removeKampagne(item);
              }
          } else {
              // do nothing
          }
    }

    filterItems(ev: any) {
          this.shouldAnimate = false;
          this.setItems();
          let val = ev.target.value;

          if (val && val.trim() !== '') {
              this.items = this.items.filter(function (item) {
                  return item.title.toLowerCase().includes(val.toLowerCase());
              });
          }
    }

    gotoCamera() {
        this.navCtrl.push(camerSeitePage);
    }
}