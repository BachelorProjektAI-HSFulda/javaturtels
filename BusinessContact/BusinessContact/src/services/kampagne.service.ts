export class KampagneService {
    private kampagnen: { title: string }[] = [];

    addKampagne(kampagne: { title: string }) {
        this.kampagnen.push(kampagne);
    }

    getKampagne() {
        return this.kampagnen.slice();
    }

    removeKampagne(item) {
        let index = this.kampagnen.indexOf(item);
        return this.kampagnen.splice(index, 1);
    }
}