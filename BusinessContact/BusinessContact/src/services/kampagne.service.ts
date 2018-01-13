import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class KampagneService {
    private kampagnen: { title: string }[] = [];

    constructor (private storage: Storage) {}

    addKampagne(kampagne: { title: string }) {
        this.kampagnen.push(kampagne);
        this.storage.set('kampagnen', this.kampagnen);
    }

    getKampagne() {
        return this.storage.get('kampagnen')
            .then(
            (kampagnen) => {
                this.kampagnen = kampagnen == null ? [] : kampagnen;
                return this.kampagnen.slice();
            });
    }

    showKampagne() {
        return this.kampagnen.slice();
    }

    removeKampagne(item) {
        let index = this.kampagnen.indexOf(item);
        this.kampagnen.splice(index, 1);
        this.storage.set('kampagnen', this.kampagnen);
    }
}