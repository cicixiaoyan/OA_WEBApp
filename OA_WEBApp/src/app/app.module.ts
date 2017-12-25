import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Content, Config } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginService } from '../pages/login/LoginService';

import { ContactsPopoverPageModule } from '../pages/contacts-popover/contacts-popover.module';
import { GetmobilePopoverPageModule } from '../pages/getmobile-popover/getmobile-popover.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer } from '@ionic-native/file-transfer';
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
import { PublicService } from '../providers/PublicService'

import { BackButtonService } from '../services/backButtonService';

import { ComponentsModule } from '../components/components.module';

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
        // TabsPage
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
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        // TabsPage
    ],
    providers: [
        LoginService,

        StatusBar,
        SplashScreen,
        AppVersion,
        Toast,
        File,
        FileChooser,
        FileOpener,
        FileTransfer,
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
        PublicService,
        Logger,
        BackButtonService

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
