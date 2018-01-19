import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { TabsPage } from '../tabs/tabs';
import { contactProfilePage } from '../contactProfile/contactProfile';
import { MScomputerService } from '../provider/MScomputerService'; 
/*
  Generated class for the camerSeite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-camerSeite',
    templateUrl: 'camerSeite.html'
})
export class camerSeitePage {

    response: any; 
     base64Image: string;
    OCRAD: any;


    constructor(public navCtrl: NavController, public navParams: NavParams,
        private camera: Camera, public loadingCtrl: LoadingController,
        private ocr: MScomputerService) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetWidth: 500,
            targetHeight: 500
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });

    }


    goBack() {
        this.navCtrl.setRoot(TabsPage);
    }

    gotoNewContact() {
        this.navCtrl.setRoot(contactProfilePage);
    }

    analyze()
    {
        let loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        (<any>window).OCRAD(document.getElementById('image'), text => {
            loader.dismissAll();
            alert(text);
            console.log(text);
        });
        // Tesseract OCR - liest text samt bild, ocrad ist bsiher noch mein favorit.
        /*(<any>window).Tesseract.recognize(document.getElementById('image'))
            .then((tesseractResult) => {
                loader.dismissAll();
                alert(tesseractResult.text);
                console.log(tesseractResult);
                //console.log("this is the data we collected from image");
                //console.log(this.recognizedText);
            });*/
    }


    callOcr()
    {
        this.ocr.getOCRFromImageBase64Data(this.base64Image).subscribe(
            data => {
                console.log(data); //comment
                this.response = JSON.stringify(data.json());
                let resp = data.json();
                alert(this.response); 

            },
            err => {
                console.log(err);
                this.response = err;
                 console.log('Error', err);
            },
            () => console.log('Computer Vision Service Call Complete')
        )
    }

   
}       