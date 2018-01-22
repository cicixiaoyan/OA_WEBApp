import { NativeService } from './../../providers/NativeService';
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
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { BackButtonService } from '../../services/backButtonService';
import { JPush } from 'ionic3-jpush';
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

    constructor(public globalData: GlobalData,
                public jPush: JPush,
                public storage: Storage,
                private viewCtrl: ViewController,
                private events: Events,
                private formBuilder: FormBuilder,
                private modalCtrl: ModalController,
                private platform: Platform,
                private alertCtrl: AlertController,
                private loginService: LoginService,
                private httpService: HttpService,
                private NavCtrl: NavController,
                private backButtonService: BackButtonService,
    ) {
        platform.ready().then(() => {
            
            this.backButtonService.registerBackButtonAction(null);
        });

        this.loginForm = this.formBuilder.group({
            UserName: ['004', [Validators.required, Validators.minLength(3)]], // 第一个参数是默认值
            UserPass: ['123456', [Validators.required, Validators.minLength(2)]]
        });
    }

    ionViewWillEnter() {
        this.canLeave = true;
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
            if (userInfo.Result){
                console.log(userInfo);
                this.storage.remove("menus");
                this.submitted = false;
                this.userInfo = userInfo.Data;
                this.globalData.Uid = userInfo.Data.Uid;
                this.globalData.Name = userInfo.Data.Name;
                this.globalData.token = userInfo.Data.Token;

                this.loginService.Menuls().subscribe(resJson => {
                    if (resJson.Result){
                        this.storage.set("menus", resJson.Data);
                        this.events.publish('menu:open', resJson.Data);
                    }
                    else alert(resJson.Data);
                }); 

                console.log("userinfo", this.userInfo);
                // 添加jpush标签
                this.jPush.setTags({ "sequence": 3, "tags": [this.userInfo.Uid, this.userInfo.CompanyEn] })
                .then(res => {
                
                    console.log("设置标签" + this.userInfo.Uid, this.userInfo.CompanyEn, 800);
                  }).catch(err => console.log("err", err) );


                this.storage.set('UserInfo', userInfo.Data);
                this.storage.set('LoginInfo', user);
                this.events.publish('user:login', userInfo);
                this.viewCtrl.dismiss(userInfo.Data);
            }else{
                this.alertCtrl.create({
                    title: userInfo.Data,
                    buttons: [{ text: '取消' }]
                }).present();

                this.submitted = false;
            }
        },
        err => {
            this.submitted = false;
        }
        );
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

    changeIP(){
        let alert = this.alertCtrl.create({
            title: 'IP设置',
            inputs: [
              {
                name: 'ip',
                placeholder: '请输入ip地址',
                value: this.globalData.APP_SERVE_URL
              }
            ],
            buttons: [
              {
                text: '取消',
                role: 'cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: '确认',
                handler: data => {
                    this.globalData.APP_SERVE_URL = data.ip;
                    this.globalData.APP_VERSION_SERVE_URL = data.ip;
                    this.globalData.FILE_SERVE_URL = data.ip;
                //   if (User.isValid(data.username)) {
                //     // logged in!
                //   } else {
                //     // invalid login
                //     return false;
                //   }
                }
              }
            ]
          });
        alert.present();
    }

}
