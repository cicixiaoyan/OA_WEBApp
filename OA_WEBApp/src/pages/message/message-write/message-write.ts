import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams, NavController,  PopoverController, ViewController } from 'ionic-angular';

import { GlobalData } from '../../../providers/GlobalData';
import { NativeService } from '../../../providers/NativeService';
import { FileObj } from "../../../model/FileObj";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { MessageService } from "../messageService";
// import { ContactsPopoverPage } from '../../contacts-popover/contacts-popover';

/**
 * Generated class for the MessageWritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
    selector: 'page-message-write',
    templateUrl: 'message-write.html',
})

export class MessageWritePage {
    addressee: string = "";
    addresseeIds: string = "";
    attName: string = "109.png";
    writeForm: FormGroup;
    // mailObj : object = {};
    @ViewChild("popoverContent", { read: ElementRef }) content: ElementRef;
    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                public nativeService: NativeService,
                private popoverCtrl: PopoverController,
                private viewCtrl: ViewController,
                private messageService: MessageService,
                private formBuilder: FormBuilder) {

        this.writeForm = this.formBuilder.group({
            addressee: ['', [Validators.required]], // 第一个参数是默认值
            Content: ["", [Validators.maxLength(180), Validators.required]],
        });


    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad MailWrite");
    }

    sent(data) {
        let data1 =  {
            "Uid": this.messageService.httpService.globalData.Uid,
            "AcceptUid": this.addresseeIds,
            "Content": data.Content
        };

        this.messageService.write(data1).subscribe((resJson) => {
            if (resJson.Result){
                this.nativeService.showToast("信息已发送");
                this.navCtrl.pop();
            }else{
                this.nativeService.showToast(resJson.Data);
            }

        });

    }

    checkPeople(myEvent) {

        let popover = this.popoverCtrl.create("ContactsPopoverPage",
            { addressee: this.addressee, addresseeIds: this.addresseeIds });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            if (!!data) {
                this.writeForm.patchValue({'addressee': data.addressee});
                this.addresseeIds = data.addresseeIds;
            }

        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}
