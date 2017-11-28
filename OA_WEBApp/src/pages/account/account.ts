import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AccountEdit } from '../account/account-edit/account-edit';
import { AccountPasswordedit } from '../account/account-passwordedit/account-passwordedit';
import { AboutusPage } from '../account/aboutus/aboutus';


import { UserInfo } from "../../model/UserInfo";
import { GlobalData } from "../../providers/GlobalData";
import { LoginPage } from "../login/login";

import { NativeService } from '../../providers/NativeService';

import { FileService } from "../../providers/FileService";
import { FileObj } from "../../model/FileObj";
import { FILE_SERVE_URL } from "../../providers/Constants";
import { Utils } from "../../providers/Utils";



/**
 * Generated class for the Account page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
})

export class Account {
    userInfo: UserInfo = new UserInfo();
    isChange: boolean = false; // 头像是否改变标识
    // avatarPath: string;
    imageBase64: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private storage: Storage,
                private globalData: GlobalData,
                private events: Events,
                private modalCtrl: ModalController,
                private actionSheetCtrl: ActionSheetController,
                private fileService: FileService,
                public nativeService: NativeService) {
        this.userInfo.photo = "assets/img/ionic.png";
        this.storage.get('UserInfo').then((userInfo: UserInfo) => {
            if (userInfo) {
                userInfo.photo = userInfo.photo ? userInfo.photo : this.userInfo.photo;
                this.userInfo = userInfo;
                this.events.publish('user:login', userInfo);
                this.globalData.Uid = userInfo.Uid;
                this.globalData.Name = userInfo.Name;
                // this.globalData.token = userInfo.token;
            } else {
                let modal = this.modalCtrl.create(LoginPage);
                modal.present();
                modal.onDidDismiss(data => {
                    data && console.log(data);
                });
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Account');
    }

    edit() {
        this.navCtrl.push(AccountEdit);
    }

    getAboutus() {
        this.navCtrl.push(AboutusPage);
    }

    pwdEdit() {
        // this.navCtrl.push(AccountPasswordedit);
        let modal = this.modalCtrl.create(AccountPasswordedit);
        modal.present();
    }

    changePhoto() {
        let options = {
            targetWidth: 400,
            targetHeight: 400
        };
        let actionSheet = this.actionSheetCtrl.create({
            title: '修改头像',
            buttons: [
                {
                    text: '从相册选择图片',
                    handler: () => {
                        this.nativeService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
                            this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '拍照',
                    handler: () => {
                        this.nativeService.getPictureByCamera(options).subscribe(imageBase64 => {
                            this.getPictureSuccess(imageBase64);
                        });
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('取消修改');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    private getPictureSuccess(imageBase64) {
        this.isChange = true;
        this.imageBase64 = <string>imageBase64;
        this.userInfo.photo = 'data:image/jpg;base64,' + imageBase64;
    }

    save() {
        if (this.isChange) {
            let fileObj = <FileObj>{ 'base64': this.imageBase64 };
            this.fileService.uploadByBase64(fileObj).subscribe(result => {// 上传图片到文件服务器
                if (result) {
                    let origPath = FILE_SERVE_URL + result[0].origPath;
                    this.storage.get('UserInfo').then((userInfo: UserInfo) => {
                        userInfo.photo = origPath;
                        this.storage.set('UserInfo', userInfo);
                    });
                    // this.viewCtrl.dismiss({avatarPath: origPath});
                    // 这里需要保存avatar字段到用户表
                }
            });
        } else {
            this.userInfo.photo = this.storage.get('UserInfo')["photo"];
        }
    }

    signOut(){
        this.storage.clear(); // 清除缓存
        Utils.sessionStorageClear(); // 清除数据缓存
        let modal = this.modalCtrl.create(LoginPage);
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
    }

}
