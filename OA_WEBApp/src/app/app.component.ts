import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, MenuController, Nav, IonicApp,
    ModalController, Keyboard, ToastController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeService } from "../providers/NativeService";
import { Welcome } from '../pages/welcome/welcome';
import { TabsPage } from "../pages/tabs/tabs";
import { GlobalData } from "../providers/GlobalData";
import { UserInfo } from "../model/UserInfo";
import { LoginService } from '../pages/login/LoginService';
import { LoginPage } from "../pages/login/login";
import { Backlog } from "../pages/home/backlog/backlog";
import { Contacts } from "../pages/home/contacts/contacts";
import { Utils } from "../providers/Utils";
// import { Newwork } from '../pages/home/newwork/newwork';


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
    photo: any = "assets/img/ben.png";

    // set our app's pages
    appPages: PageInterface[] = [
        { title: '首页', component: TabsPage, index: 0, icon: 'calendar' },
        { title: '邮件', component: TabsPage, index: 1, icon: 'ios-mail' },
        { title: '通讯录', component: TabsPage, index: 4, icon: 'md-call', tab1Component: Contacts },
        { title: '公告管理', component: TabsPage, index: 2, icon: 'ios-notifications' },
        // { title: '新建工作', component: TabsPage, index: 5, icon: 'md-exit', tab1Component: Newwork },
        { title: '待办事项', component: TabsPage, index: 6, icon: 'ios-calendar', tab1Component: Backlog }
        // ,{ title: '设置', component: TabsPage, index: 3, icon: 'ios-cog'},
        // { title: '登陆', component: LoginPage, index: 7, icon: 'contacts' }
    ];

    rootPage: TabsPage;
    backButtonPressed: boolean = false;
    constructor(public menu: MenuController,
                private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private keyboard: Keyboard,
                private ionicApp: IonicApp,
                private storage: Storage,
                private globalData: GlobalData,
                private toastCtrl: ToastController,
                private modalCtrl: ModalController,
                private events: Events,
                private loginService: LoginService,
                private nativeService: NativeService) {


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.storage.get('firstIn').then((result) => {
                // this.nativeService.showToast("不是第一次进入");
                if (result) {
                    // this.rootPage = TabsPage;
                    this.storage.get('loginInfo').then((loginInfo) => {
                        if (loginInfo) {
                            this.loginService.login(loginInfo).subscribe((resJson) => {
                                if (resJson.result){
                                    this.globalData.Uid = resJson.Data.Uid;
                                    this.globalData.Name = resJson.Data.Name;
                                    this.globalData.token = resJson.Data.Token;
                                    this.events.publish('user:login', result.Data);
                                }else{
                                    let modal = this.modalCtrl.create(LoginPage);
                                    modal.present();
                                    modal.onDidDismiss(data => {
                                        data && console.log(data);
                                        this.nav.setRoot(TabsPage, { tabIndex: 0 });
                                    });
                                }
                            });

                        } else {

                            let modal = this.modalCtrl.create(LoginPage);
                            modal.present();
                            modal.onDidDismiss(data => {
                                data && console.log(data);
                                this.nav.setRoot(TabsPage, { tabIndex: 0 });
                            });
                        }
                    });
                }
                else {

                    this.storage.set('firstIn', true);
                    let modal = this.modalCtrl.create(Welcome);
                    modal.present();
                    modal.onDidDismiss(data => {
                        data && console.log(data);
                        this.nav.setRoot(TabsPage, { tabIndex: 0 });
                    });
                    // this.rootPage = Welcome;
                }
            });

            statusBar.styleDefault();
            splashScreen.hide();
            this.registerBackButtonAction(); // 注册返回按键事件
            this.assertNetwork(); // 检测网络
            // this.nativeService.detectionUpgrade(); // 检测app是否升级
        });

    }

    openPage(page: PageInterface) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario

        this.menu.close();

        if (page.index) {
            if (page.tab1Component) {
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
            this.nav.setRoot(TabsPage, { tabIndex: 3 });
        } else {
            this.storage.clear(); // 清除缓存
            Utils.sessionStorageClear(); // 清除数据缓存
            let modal = this.modalCtrl.create(LoginPage);
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

}
