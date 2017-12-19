export class KampagneService {
    private kampagnen: { title: string }[] = [];

    addKampagne(kampagne: { title: string }) {
        this.kampagnen.push(kampagne);
    }

    getKampagne() {
        return this.kampagnen.slice();
    }
}