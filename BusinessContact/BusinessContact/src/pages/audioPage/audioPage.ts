﻿import { NavController, Platform, Content, Keyboard } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlugin } from 'ionic-native';




@Component({
    selector: 'page-audio',
    templateUrl: 'audioPage.html'
})




export class audioPage {



    recording: boolean = false;
    filePath: string;
    fileName: string;
    audio: any;
    audioList: any[] = [];
   


    constructor(public navCtrl: NavController,
        private media: Media,
        private file: File,
        public platform: Platform) { }

    getAudioList() {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
        }
    }

    ionViewWillEnter() {
        this.getAudioList();
    }

    startRecord() {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.wav';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        } else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
            this.filePath = this.file.dataDirectory + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    }

    playAudio(file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        } else if (this.platform.is('android')) {
            this.filePath = this.file.dataDirectory + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.play();
        this.audio.setVolume(0.8);
    }

    stopRecord() {
        this.audio.stopRecord();
        let data = { filename: this.fileName };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    }

    deleteRecord() {
        if (confirm("Are you sure, this Audiorecord will be deleted?") == true) {

            //this.file.removeFile(this.filePath, this.fileName);
        }

    }







}