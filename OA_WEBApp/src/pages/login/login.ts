import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, Platform, AlertController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './LoginService';
import { UserInfo } from "../../model/UserInfo";

// import { FindPassword } from './find-password/find-password';
// import {UserInfo} from "../../model/UserInfo";
import { GlobalData } from "../../providers/GlobalData";

// import { TabsPage } from '../tabs/tabs';
import { HttpService } from "../../providers/HttpService";
@IonicPage()

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [LoginService]
})
export class LoginPage {
    userInfo: any;
    submitted: boolean = false;
    canLeave: boolean = false;
    loginForm: any;

    constructor(private viewCtrl: ViewController,
                private events: Events,
                private formBuilder: FormBuilder,
                private storage: Storage,
                private modalCtrl: ModalController,
                private platform: Platform,
                private alertCtrl: AlertController,
                private globalData: GlobalData,
                private loginService: LoginService,
                private httpService: HttpService
    ) {

        this.loginForm = this.formBuilder.group({
            UserName: ['admin', [Validators.required, Validators.minLength(4)]], // 第一个参数是默认值
            UserPass: ['123', [Validators.required, Validators.minLength(2)]]
        });
    }

    ionViewWillEnter() {
        this.canLeave = false;
        this.storage.get('UserInfo').then(userInfo => {
            this.userInfo = userInfo && userInfo.user ? userInfo.user : null;
        });
    }

    ionViewCanLeave(): boolean {
        let bool = !!this.userInfo;
        if (this.canLeave || bool) {
            return true;
        } else {
            this.alertCtrl.create({
                title: '确认退出软件？',
                buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: () => {
                        this.platform.exitApp();
                    }
                }
                ]
            }).present();
            return false;
        }
    }

    login(user) {
        this.submitted = true;
        // this.httpService.postFormData("ashx/Login.ashx/LoginInfo",user)
        //  .map(responce => responce.json())
        this.loginService.login(user).subscribe((userInfo) => {
            console.log(userInfo);
            this.submitted = false;
            // userInfo.token = 'xx122a9Wf';//从后台获取token,暂时写死
            this.userInfo = userInfo.Data;
            this.globalData.Uid = userInfo.Data.Uid;
            this.globalData.Name = userInfo.Data.Name;
            this.globalData.token = userInfo.Data.Token;
            // alert(this.globalData.token);
            this.storage.set('UserInfo', userInfo.Data);
            this.storage.set('LoginInfo', user);
            // alert(this.storage.get('UserInfo'));
            this.events.publish('user:login', userInfo);
            this.viewCtrl.dismiss(userInfo.Data);
        });
    }

    findPassword() {
        this.canLeave = true;
        let modal = this.modalCtrl.create("FindPassword");
        modal.present();
        modal.onDidDismiss(data => {
            this.canLeave = false;
        });

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
