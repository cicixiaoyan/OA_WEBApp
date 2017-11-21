import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Content, Config } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomeModule } from '../pages/home/home.module';
import { MailModule } from '../pages/mail/mail.module';
import { MailReadModule } from '../pages/mail/mail-read/mail-read.module';
import { MailWriteModule } from '../pages/mail/mail-write/mail-write.module';
import { NoticeModule } from '../pages/notice/notice.module';
import { NoticeDetailModule } from '../pages/notice/notice-detail/notice-detail.module';
import { AccountModule } from '../pages/account/account.module';
import { AboutusPageModule } from '../pages/account/aboutus/aboutus.module';
import { AccountEditModule } from '../pages/account/account-edit/account-edit.module';
import { AccountPasswordeditModule } from '../pages/account/account-passwordedit/account-passwordedit.module';
import { LoginModule } from '../pages/login/login.module';
import { WelcomeModule } from '../pages/welcome/welcome.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { Transfer } from '@ionic-native/transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { PhotoViewer } from '@ionic-native/photo-viewer';


import { NativeService } from "../providers/NativeService";
import { HttpIntercept } from "../providers/HttpIntercept";
import { HttpService } from "../providers/HttpService";
import { FileService } from "../providers/FileService";
import { Helper } from "../providers/Helper";
import { Utils } from "../providers/Utils";
import { Http, HttpModule } from "@angular/http";
import { HttpInterceptHandle } from "../providers/HttpInterceptHandle";
import { GlobalData } from "../providers/GlobalData";

import { Logger } from "../providers/Logger";
import { ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave } from "./itransitions";

// 安装依赖:cnpm i fundebug-javascript --save
// https://docs.fundebug.com/notifier/javascript/framework/ionic2.html
import { ENABLE_FUNDEBUG, IS_DEBUG, FUNDEBUG_API_KEY } from "../providers/Constants";
declare var require: any;
let fundebug: any = require("fundebug-javascript");
fundebug.apikey = FUNDEBUG_API_KEY;
fundebug.releasestage = IS_DEBUG ? 'development' : 'production'; // 应用开发阶段，development:开发;production:生产
fundebug.silent = !ENABLE_FUNDEBUG; // 如果暂时不需要使用Fundebug，将silent属性设为true

export class FunDebugErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    fundebug.notifyError(err);
    console.error(err);
  }
}

@NgModule({
    declarations: [
        MyApp,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            iconMode: 'ios',
            mode: 'ios',
            tabsHideOnSubPages: true
        }),
        IonicStorageModule.forRoot(),
        HomeModule,
        MailModule,
        MailReadModule,
        MailWriteModule,
        NoticeModule,
        NoticeDetailModule,
        AccountModule,
        AboutusPageModule,
        AccountEditModule,
        AccountPasswordeditModule,
        LoginModule,
        WelcomeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppVersion,
        Toast,
        File,
        FileChooser,
        Transfer,
        InAppBrowser,
        Network,
        Camera,
        ImagePicker,
        PhotoViewer,
        Content,
        { provide: ErrorHandler, useClass: FunDebugErrorHandler },
        NativeService,
        HttpIntercept,
        HttpService,
        FileService,
        Helper,
        Utils,
        HttpInterceptHandle,
        GlobalData,
        Logger
        // ,HTTP
    ]
})
export class AppModule { 
    constructor(public config: Config) {
        this.setCustomTransitions();
      }
    
      private setCustomTransitions() {
        this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
        this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
        this.config.setTransition('modal-scale-enter', ModalScaleEnter);
        this.config.setTransition('modal-scale-leave', ModalScaleLeave);
      }
}
