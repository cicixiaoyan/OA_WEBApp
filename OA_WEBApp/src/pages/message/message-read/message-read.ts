import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";

import { Transfer } from '@ionic-native/transfer'; // , FileUploadOptions, TransferObject
import { File } from '@ionic-native/file';

import { MessageService } from '../messageService';

/**
 * Generated class for the MessageReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-read',
  templateUrl: 'message-read.html',
})
export class MessageReadPage {
    @ViewChild(Content) content: Content;
    messageContent: string = ""; // 消息内容
    messageDetail: any = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private nativeService: NativeService,
                private modalCtrl: ModalController,
                private transfer: Transfer,
                private messageService: MessageService,
                private file: File) {
        this.initializeItems();
    }
    initializeItems() {

        this.messageService.read(this.navParams.get('id')).subscribe((resJson) => {
            if (resJson.Result){
                this.messageDetail = resJson.Data;
            }
        });

        // this.messageContent = this.messageDetail.ggnr;
    }

}
