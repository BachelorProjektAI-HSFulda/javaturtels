import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MScomputerService } from '../provider/MScomputerService';
import {addContactPage } from '../addContact/addContact'; 

/*
  Generated class for the imgWahl page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-imgWahl',
    templateUrl: 'imgWahl.html'
})
export class imgWahlPage {

    base64Image: string; 
    response; any; 
  

    constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera
        , public loadingCtrl: LoadingController, private ocr: MScomputerService)
    {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.base64Image = 'data:image/jpeg;base64,' + imageData;

        }, (err) => {
            // Handle error
        });}



    ionViewDidLoad() {
        console.log('ionViewDidLoad imgWahlPage');
    }

    gotoNewContact()
    {
        this.navCtrl.push(addContactPage);
    }


 //analyze()
 //{

 //    let loader = this.loadingCtrl.create({
 //        content: 'Please wait...'
 //    });
 //    loader.present();
 //    (<any>window).OCRAD(document.getElementById('image'), text => {
 //        loader.dismissAll();
 //        alert(text);
 //        console.log(text);
 //    });
 //       // Tesseract OCR - liest text samt bild, ocrad ist bsiher noch mein favorit.
 //       /*(<any>window).Tesseract.recognize(document.getElementById('image'))
 //           .then((tesseractResult) => {
 //               loader.dismissAll();
 //               alert(tesseractResult.text);
 //               console.log(tesseractResult);
 //               //console.log("this is the data we collected from image");
 //               //console.log(this.recognizedText);
 //           });*/

 //   }


 getOcr()
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


