import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomeModule } from '../pages/home/home.module';
import { MailModule } from '../pages/mail/mail.module';
import { NoticeModule } from '../pages/notice/notice.module';
import { AccountModule } from '../pages/account/account.module';
import { LoginModule } from '../pages/login/login.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Network} from '@ionic-native/network';
import {Camera} from '@ionic-native/camera';
import {ImagePicker} from '@ionic-native/image-picker';
import {PhotoViewer} from '@ionic-native/photo-viewer';



import {NativeService} from "../providers/NativeService";
import {HttpIntercept} from "../providers/HttpIntercept";
import {HttpService} from "../providers/HttpService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";
import {Http, XHRBackend, RequestOptions, HttpModule} from "@angular/http";
import {HttpInterceptHandle} from "../providers/HttpInterceptHandle";
import {GlobalData} from "../providers/GlobalData";

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions, httpInterceptHandle: HttpInterceptHandle) {
  return new HttpIntercept(backend, defaultOptions, httpInterceptHandle);
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',  
      iconMode: 'ios',  
      mode: 'ios'
    }),
    IonicStorageModule.forRoot(),
    HomeModule,
    MailModule,
    NoticeModule,
    AccountModule,
    LoginModule
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
    Transfer,
    InAppBrowser,
    Network,
    Camera,
    ImagePicker,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, HttpInterceptHandle]},
    NativeService,
    HttpIntercept,
    HttpService,
    FileService,
    Helper,
    Utils,
    HttpInterceptHandle,
    GlobalData
  ]
})
export class AppModule {}
