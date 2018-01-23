import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KampagneService } from "../../services/kampagne.service"

@Component({
    selector: 'page-neueKampagne',
    templateUrl: 'neueKampagne.html',
})
export class NeueKampagnePage {

    constructor(private kampagneService: KampagneService, private navCtrl: NavController) {
    }

    onAddKampagne(value: { title: string } ) {
        this.kampagneService.addKampagne(value);
        this.navCtrl.pop();
    }

}
