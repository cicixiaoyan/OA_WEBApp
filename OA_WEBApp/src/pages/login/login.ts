import { Component } from '@angular/core';
import { ModalController, NavController, ViewController, Nav, Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './LoginService';

import { FindPassword } from './find-password/find-password';
// import {UserInfo} from "../../model/UserInfo";
import { GlobalData } from "../../providers/GlobalData";

import { TabsPage } from '../tabs/tabs';
import { HttpService } from "../../providers/HttpService";


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
    nav: Nav;

    constructor(private viewCtrl: ViewController,
        private formBuilder: FormBuilder,
        private storage: Storage,
        private modalCtrl: ModalController,
        private platform: Platform,
        private alertCtrl: AlertController,
        private globalData: GlobalData,
        private loginService: LoginService,
        public navCtrl: NavController,
        private httpService: HttpService
    ) {

        this.loginForm = this.formBuilder.group({
            UserName: ['admin', [Validators.required, Validators.minLength(4)]], // 第一个参数是默认值
            UserPass: ['123', [Validators.required, Validators.minLength(2)]]
        });
    }

    ionViewWillEnter() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
        this.storage.get('UserInfo').then(userInfo => {
            this.userInfo = userInfo || null;
        });
    }

    ionViewCanLeave(): boolean {
        let bool = !!this.userInfo;
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }

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
        user.action = 'logininfo';
        // this.httpService.postFormData("ashx/Login.ashx/LoginInfo",user)
        //  .map(responce => responce.json())
        this.loginService.login(user).subscribe((userInfo) => {
            console.log(userInfo);
            this.submitted = false;
            // userInfo.token = 'xx122a9Wf';//从后台获取token,暂时写死
            this.globalData.ui_id = userInfo[0].ui_id;
            this.globalData.ui_desc = userInfo[0].ui_desc;
            // this.globalData.token = userInfo.token;
            this.userInfo = userInfo[0];
            this.storage.set('UserInfo', userInfo[0]);
            // this.viewCtrl.dismiss(userInfo);
            this.navCtrl.setRoot(TabsPage, { tabIndex: 0 });
        });
    }

    findPassword() {
        this.canLeave = true;
        let modal = this.modalCtrl.create(FindPassword);
        modal.present();
        this.canLeave = false;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
