import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, MenuController, Nav, IonicApp,
    ModalController, Keyboard, ToastController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeService } from "../providers/NativeService";
import { GlobalData } from "../providers/GlobalData";
import { UserInfo } from "../model/UserInfo";
import { LoginService } from '../pages/login/LoginService';
import { Utils } from "../providers/Utils";
import { Helper } from '../providers/Helper';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


declare var AppMinimize;

export interface PageInterface {
    title: string;
    component: any;
    icon: string;
    index?: number;
    tab1Component?: any;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    photo: any = "assets/img/boy.png";

    // set our app's pages
    appPages: PageInterface[] = [
        { title: '首页', component: "TabsPage", index: 0, icon: 'calendar' },
        { title: '消息', component: "TabsPage", index: 1, icon: 'ios-mail' },
        { title: '通讯录', component: "TabsPage", index: 4, icon: 'md-call', tab1Component: "Contacts" },
        { title: '公告管理', component: "TabsPage", index: 6, icon: 'ios-notifications', 
        tab1Component: "AnnouncementPage" },
        // { title: '新建工作', component: TabsPage, index: 5, icon: 'md-exit', tab1Component: Newwork },
        { title: '待办事项', component: "TabsPage", index: 2, icon: 'ios-calendar' }
        // ,{ title: '设置', component: TabsPage, index: 3, icon: 'ios-cog'},
        // { title: '登陆', component: LoginPage, index: 7, icon: 'contacts' }
    ];

    rootPage: string = "TabsPage";
    backButtonPressed: boolean = false;
    constructor(public menu: MenuController,
                private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private keyboard: Keyboard,
                private ionicApp: IonicApp,
                private storage: Storage,
                public globalData: GlobalData,
                private toastCtrl: ToastController,
                private modalCtrl: ModalController,
                private events: Events,
                private helper: Helper,
                private loginService: LoginService,
                private alertCtrl: AlertController,
                private nativeService: NativeService) {

                    
        platform.ready().then(() => {
            this.helper.jPush.getRegistrationID().then(regid => {
                console.log("registrtion" + regid);
            });
            this.helper.initJpush(); // JPush初始化 
            this.jpushOpenNotification(); // 
            this.helper.setTags();
            this.storage.get("ip").then(data => {
                this.globalData.APP_SERVE_URL = data;
                this.globalData.APP_VERSION_SERVE_URL = data;
                this.globalData.FILE_SERVE_URL = data;
            });
            // this.helper.setAlias("admin");
            // this.storage.get('firstIn').then((result) => {
            //     // this.nativeService.showToast("不是第一次进入");
            //     if (result) {
            this.storage.get('loginInfo').then((loginInfo) => {                
                if (loginInfo) {
                    this.loginService.login(loginInfo).subscribe((resJson) => {
                        if (resJson.result){
                            this.globalData.Uid = resJson.Data.Uid;
                            this.globalData.Name = resJson.Data.Name;
                            this.globalData.token = resJson.Data.Token;
                            // this.helper.setAlias();
                            this.events.publish('user:login', resJson.Data);
                            this.nav.setRoot("TabsPage", { tabIndex: 0 });
                        }else{
                            this.storage.remove("Menu");
                            let modal = this.modalCtrl.create("LoginPage");
                            modal.present();
                            modal.onDidDismiss(data => {
                                data && console.log(data);
                                // this.helper.setAlias();
                                this.nav.setRoot("TabsPage", { tabIndex: 0 });
                            });
                        }
                    });

                } else {
                    this.storage.remove("Menu");
                    let modal = this.modalCtrl.create("LoginPage");
                    modal.present();
                    modal.onDidDismiss(data => {
                        data && console.log(data);
                        // this.helper.setAlias();
                        this.nav.setRoot("TabsPage", { tabIndex: 0 });
                    });
                }
            });
            //    }
            //     else {
            //         this.storage.set('firstIn', true);
            //         let modal = this.modalCtrl.create("Welcome");
            //         modal.present();
            //         modal.onDidDismiss(data => {
            //             data && console.log(data);
            //             this.nav.setRoot("TabsPage", { tabIndex: 0 });
            //         });
            //         // this.rootPage = Welcome;
            //     }
            // });
            
            statusBar.styleDefault();
            splashScreen.hide();



            this.registerBackButtonAction(); // 注册返回按键事件
            this.assertNetwork(); // 检测网络
            // this.nativeService.detectionUpgrade(); // 检测app是否升级

        });

    }

    openPage(page: PageInterface) {
        this.menu.close();

        if (page.index) {
            if (page.tab1Component) {
                // let tabs = this.nav.getActiveChildNav();
                // let tab = tabs.getSelected();
                // console.log(tab);
                
                this.nav.setRoot(page.component, { tab1Component: page.tab1Component, tabIndex: page.index });
            } else {
                this.nav.setRoot(page.component, { tabIndex: page.index });
            }


        } else {

           
            this.nav.setRoot(page.component).catch(() => {
                console.log("Didn't set nav root");
            });
        }


    }

    goTo(name) {
        this.menu.close();
        if (name == "edit") {
            this.nav.setRoot("TabsPage", { tabIndex: 3 });
        } else {
            this.storage.clear(); // 清除缓存
            Utils.sessionStorageClear(); // 清除数据缓存
            let modal = this.modalCtrl.create("LoginPage");
            modal.present();
            modal.onDidDismiss(data => {
                data && console.log(data);
            });
        }

    }

    assertNetwork() {
        if (!this.nativeService.isConnecting()) {
            this.toastCtrl.create({
                message: '未检测到网络,请连接网络',
                showCloseButton: true,
                closeButtonText: '确定'
            }).present();
        }
    }

    registerBackButtonAction() {
        if (!this.nativeService.isAndroid()) {
          return;
        }
        this.platform.registerBackButtonAction(() => {
          if (this.keyboard.isOpen()) {// 如果键盘开启则隐藏键盘
            this.keyboard.close();
            return;
          }
          // 如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
          // this.ionicApp._toastPortal.getActive() ||
        //   this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
          let activePortal = this.ionicApp._modalPortal.getActive()
          || this.ionicApp._toastPortal.getActive() ||
          this.ionicApp._overlayPortal.getActive();
          if (activePortal) {
            activePortal.dismiss();
            return;
          }
          let activeVC = this.nav.getActive();
          let tabs = activeVC.instance.tabs;
          let activeNav = tabs.getSelected();
          return activeNav.canGoBack() ?
            activeNav.pop() :
            // this.nativeService.minimize(); //
             this.showExit();
        }, 1);
      }

    // 双击退出提示框
    showExit() {
        if (this.backButtonPressed) { // 当触发标志为true时，即2秒内双击返回按键则退出APP
            this.platform.exitApp();
        } else {
            this.nativeService.showToast('再按一次退出应用');
            this.backButtonPressed = true;
            setTimeout(() => { // 2秒内没有再次点击返回则将触发标志标记为false
                this.backButtonPressed = false;
            }, 2000);
        }
    }

    jpushOpenNotification() {
        // 当点击极光推送消息跳转到指定页面
        this.events.subscribe('jpush.openNotification', obj => {
            this.noticeRes(obj);
        });

        this.events.subscribe('jpush.receiveNotification', obj => {
            console.log(obj);
            // 通知消息刷新
            this.events.publish('message.receiveNotification', true);
            let prompt = this.alertCtrl.create({
                title: '收到消息提醒',
                message: "您收到一条消息：" + obj.content,
                buttons: [
                  {
                    text: '关闭',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: '查看',
                    handler: data => {
                      this.noticeRes(obj);
                    }
                  }
                ]
              });
            prompt.present();
            // console.log("首页tongzhi ", content);
        });

        this.events.subscribe('jpush.receiveMessage', obj => {
            // 通知消息刷新
            this.events.publish('message.receiveNotification', true);

            let toast = this.toastCtrl.create({
                message: obj.content,
                showCloseButton: true,
                closeButtonText: '确定'
            });
            toast.onDidDismiss(() => {
                
            });

            toast.present(); 
        });
    }

    private noticeRes (obj){
        let pageType = {
            "0": "MessagePage",
            "1": "Backlog",
            "2": "Mail",
            "3": "SmsPage",
        };
        try{

            let tabs = this.nav.getActiveChildNav();
            let tab = tabs.getSelected();
            let activeVC = tab.getActive();
            console.log(activeVC);
    
            // if (obj.param.length != 0){
            if (activeVC.name == pageType[obj.param.type]) return;
            if (obj.param.type == "0") {
                this.nav.setRoot("TabsPage", { tabIndex: 1 });
            }else if (obj.param.type == "1"){
                this.nav.setRoot("TabsPage", { tabIndex: 2 });
            }else{
                tabs.select(1);
                // this.tab.public(pageType[obj.param.type]);
            }
            // }
            if (activeVC.comments == "MessagePage") return;
    
        }catch (err){
            console.log("jpusherr", err);
        }
    }

}
